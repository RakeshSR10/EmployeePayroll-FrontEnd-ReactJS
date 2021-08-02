#!/bin/bash -x

cp .env /home/ubuntu/Frontend/
cd /home/ubuntu/Frontend
directory=$(pwd)
echo "Directory is $directory"
npm install
npm run build
npx kill-port 8000
npm start
echo "Successfully Deployed"