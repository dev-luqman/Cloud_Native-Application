import os
import json
import boto3
from google.oauth2.credentials import Credentials
from googleapiclient.discovery import build

# Environment variables
CLIENT_ID = os.environ['CLIENT_ID']
CLIENT_SECRET = os.environ['CLIENT_SECRET']
REDIRECT_URI = os.environ['REDIRECT_URI']

# Initialize S3 client
s3 = boto3.client('s3')

def authenticate_google_drive():
    creds = Credentials.from_client_id_and_client_secret(
        CLIENT_ID,
        CLIENT_SECRET,
        redirect_uri=REDIRECT_URI,
        scopes=['https://www.googleapis.com/auth/drive']
    )
    drive_service = build('drive', 'v3', credentials=creds)
    return drive_service

def download_file(service, file_id, file_name):
    request = service.files().get_media(fileId=file_id)
    with open(file_name, 'wb') as fh:
        downloader = MediaIoBaseDownload(fh, request)
        done = False
        while done is False:
            status, done = downloader.next_chunk()

def download_folder(service, folder_id, folder_name):
    results = service.files().list(q=f"'{folder_id}' in parents",
                                   fields="files(id, name, mimeType)").execute()
    items = results.get('files', [])

    for item in items:
        item_name = item['name']
        item_id = item['id']
        item_type = item['mimeType']
        
        if item_type == 'application/vnd.google-apps.folder':
            # Recursive call for subfolders
            download_folder(service, item_id, os.path.join(folder_name, item_name))
        else:
            # Download file
            download_file(service, item_id, os.path.join(folder_name, item_name))

def lambda_handler(event, context):
    # Authenticate Google Drive
    drive_service = authenticate_google_drive()
    
    # Folder ID of the folder you want to back up
    folder_id = '1Ixa95lkyxYopbqKB0iEbwDuvZx4jvCMR'
    
    # Temporary directory to download files
    temp_dir = '/tmp/google_drive_backup'
    os.makedirs(temp_dir, exist_ok=True)
    
    # Download the entire folder
    download_folder(drive_service, folder_id, temp_dir)
    
    # Upload files to S3 bucket
    for root, dirs, files in os.walk(temp_dir):
        for file_name in files:
            local_file_path = os.path.join(root, file_name)
            s3_file_key = os.path.relpath(local_file_path, temp_dir)
            s3.upload_file(local_file_path, 'fg-google-drive-backup', s3_file_key)
    
    return {
        'statusCode': 200,
        'body': json.dumps('Files backed up successfully')
    }