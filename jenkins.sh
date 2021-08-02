#!/bin/bash -x

cd /home/ubuntu/Frontend
directory=$(pwd)
echo "Directory is $directory"
npm install
npm run build
npx kill-port 3000
npm start
echo "Successfully Deployed"