# Music App Deployment on AWS ECS

This project demonstrates the deployment of a music streaming application using AWS ECS (Elastic Container Service). The application comprises three microservices: music, user, and playlist. Each microservice is deployed as a containerized application on AWS ECS for scalability, reliability, and ease of management.

## Architecture

![Architecture diagram](./ms-music.jpeg)

## Technologies Used:
-   Docker
-   ECR
-   AWS ECS (Elastic Container Service)
-   AWS Fargate
-   AWS CLI

## Prerequisites:
- An AWS account with appropriate permissions to create ECS clusters, services, and tasks.
- Docker installed on your local machine.
- AWS CLI installed and configured with appropriate credentials.

## Deployment Steps:

### 1. Dockerize Microservices:
- Clone the repository containing the source code for each microservice  under aws-console folder (music, user, playlist).
- Dockerize each microservice and spin up locally to test.
    ```shell
        ## cd to aws-conosle directory and run 
        docker compose up ## to spin up all the microservice under the directory
        ## curl http://localhost:3000/api/musics - musics service
        ## curl http://localhost:3001/api/users - users service
        ## curl http://localhost:3002/api/playlist - users playlists
    ```
- Build Docker images for each microservice using the `docker build` command.
    ```shell
        docker build -t image-name-here . ## to build the image and tag it
    ```

### 2. Push Docker Images to AWS ECR (Elastic Container Registry):
- Create an ECR repository for each microservice in the AWS Management Console.
- Tag the Docker images with the ECR repository URI.
- Push the Docker images to ECR using the `docker push` command.
- Apply same for all services show in the diagram below

![ECR diagram](./ecr_1.png)
![ECR diagram](./ecr_2.png)
![ECR diagram](./ecr_2.png)


### 3. Configure AWS ECS Cluster:
- Create an ECS cluster in the AWS Management Console or using AWS CLI.
- Define the cluster capacity, networking configuration, and security groups as per your requirements.
- Ensure that the ECS cluster is configured to use Fargate launch type for serverless container deployments.
![ECS diagram](./ecs_1.png)

### 4. Create ECS Task Definitions:
- Define task definitions for each microservice specifying the Docker image URI, CPU/memory requirements, port mappings, and environment variables.
- Create ECS task definitions either through the AWS Management Console or using AWS CLI.
![ECS diagram](./ecs_2.png)

### 5. Create ECS Services:
- Create ECS services for each microservice based on the previously defined task definitions.
- Configure the desired number of tasks, service discovery, and load balancing settings.
- Associate the services with the ECS cluster.
- Configure network, loadbalancer and target group for ther servise
![ECS diagram](./ecs_3.png)

### 6. Testing and Monitoring:
- Verify that the ECS services are running successfully by accessing the application endpoints.
- Monitor the ECS cluster, services, and tasks using AWS CloudWatch and ECS dashboard.
- Implement logging and monitoring solutions for better visibility into the application's performance and health.

## Conclusion:
By following these deployment steps, you can successfully deploy a music streaming application consisting of multiple microservices on AWS ECS. Utilizing containerization with Docker and orchestration with ECS ensures scalability, reliability, and efficient resource utilization for your application.

## Additional Resources:
- [AWS ECS Documentation](https://docs.aws.amazon.com/ecs/)
- [Docker Documentation](https://docs.docker.com/)
- [AWS CLI Documentation](https://awscli.amazonaws.com/v2/documentation/api/latest/index.html)
