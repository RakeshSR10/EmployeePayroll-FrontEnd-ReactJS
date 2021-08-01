#!/bin/bash -x

cd /home/ubuntu/EmployeePayroll-FrontEnd-ReactJS
working_directory=$(pwd)
echo "Present working directory = $working_directory"
pm2 delete 0
npm i 
echo "Installing packages"
npm run build
echo "build success!"
pm2 --name EmployeePayroll-FrontEnd-ReactJS start npm -- start