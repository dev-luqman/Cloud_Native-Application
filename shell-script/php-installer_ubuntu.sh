#!/bin/bash

######## Update package lists ##########
apt update

######## Install Git if not already installed ##########
if ! command -v git &> /dev/null
then
    apt install -y git
fi

########  Install PHP and Apache ##########
apt install -y php apache2

# Check for the version of php and apache2 after installing
php_version=$(apt show php | awk '/Version/ { print $2; exit }')
apache_version=$(apt show apache2 | awk '/Version/ { print $2; exit }')

# Display message indicating PHP and Apache are installed along with their versions
echo ""
echo "******************************************"
echo "*        PHP and Apache Installed!       *"
echo "*        PHP Version: $php_version       *"
echo "*        Apache Version: $apache_version *"
echo "*        Enjoy Your Web Development!     *"
echo "******************************************"
echo ""


######## Install Composer ##########
apt install -y curl php-cli php-mbstring unzip

#* latest version of composer without selecting version
curl -sS https://getcomposer.org/installer -o composer-setup.php
php composer-setup.php --install-dir=/usr/local/bin --filename=composer
rm composer-setup.php

echo ""
echo "******************************************"
echo "*     Composer installed successfully!    *"
echo "******************************************"
echo ""



########  Install MySQL (optional) ##########
read -p "Do you want to install MySQL? (y/n): " install_mysql
if [ "$install_mysql" == "y" ]; then
    apt install -y mysql-server
    systemctl start mysql
    systemctl enable mysql
    mysql_version=$(mysql --version | awk '{print $3}')
    echo ""
    echo "******************************************"
    echo "*              MySQL Installed!          *"
    echo "*        Version: $mysql_version        *"
    echo "*           Enjoy Your Database!         *"
    echo "******************************************"
    echo ""
fi


########  Start Apache ##########
systemctl start apache2


######## Enable Apache to start on boot ##########
systemctl enable apache2

######## Install Let's Encrypt certbot (optional) ##########
read -p "Do you want to obtain an SSL certificate? (y/n): " install_certbot
if [ "$install_certbot" == "y" ]; then
    # Install Let's Encrypt certbot
    apt install -y certbot python3-certbot-apache
    read -p "Enter the domain name for SSL certificate (e.g., example.com): " domain_name
    if [ -n "$domain_name" ]; then
        certbot --apache -d "$domain_name"
    else
        echo "No domain name provided. Skipping Let's Encrypt certificate installation."
    fi
fi



######## Expose additional ports ##########
ufw allow 22 # SSH port
ufw allow 80 # HTTP port
ufw allow 443 # HTTPS port
ufw allow 1234 # Example additional port to expose

######## Enable the firewall ##########
ufw --force enable

######## Get the server's IP address ##########
server_ip=$(curl ifconfig.me | awk '{print $1}')

######## Display the server's IP address to the user ##########
echo ""
echo "******************************************"
echo "*        Installation Summary            *"
echo "******************************************"
echo "*        PHP and Apache Installed!       *"
echo "*        PHP Version: $php_version       *"
echo "*        Apache Version: $apache_version *"
if [ "$install_certbot" == "y" ]; then
    echo "*        Let's Encrypt Installed!       *"
fi
if [ "$install_mysql" == "y" ]; then
    echo "*        MySQL Installed!               *"
    echo "*        MySQL Version: $mysql_version   *"
fi
echo "*                                      *"
echo "*        Server IP: $server_ip          *"
echo "*    You can view the Apache page at:   *"
echo "*          http://$server_ip/           *"
echo "******************************************"
echo ""


