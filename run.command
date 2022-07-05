#!/bin/bash
cd "$(dirname "$0")"

# if dependencies are not installed, install them
if [ ! -d "node_modules" ] 
then
    echo "Installing dependencies"
    npm i > /dev/null
fi

node index.js