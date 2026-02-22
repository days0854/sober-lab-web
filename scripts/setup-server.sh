#!/bin/bash

# Update system
sudo apt-get update
sudo apt-get upgrade -y

# Install Node.js (v20)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2
sudo npm install -g pm2

# Install Git
sudo apt-get install -y git

# Create project directory
mkdir -p /var/www/sober-lab-web
sudo chown -R $USER:$USER /var/www/sober-lab-web

echo "Server preparation complete. You can now pull the code and build the project."
