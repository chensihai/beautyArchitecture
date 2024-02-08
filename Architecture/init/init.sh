#!/bin/sh

# Check if frontend directory does not exist
if [ ! -f "/app/frontend/package.json" ]; then
  echo "Creating frontend directory..."
  create-react-app /app/frontend
  rm -rf /app/frontend/node_modules
  sleep 60
  chown -R node /app/frontend
  chgrp -R node /app/frontend
fi

# Check if backend directory does not exist
if [ ! -f "/app/backend/composer.json" ]; then
  echo "Creating backend directory..."
  composer create-project --prefer-dist laravel/lumen /app/backend
  cd /app/backend
  rm -rf vendor
  ln -s vendor ../vendor
  cd /app
  sleep 60
  chown -R node /app/backend
  chgrp -R node /app/backend
fi

# Continue with the main command of the container
# exec "$@"
# # open shell
# exec /bin/sh
# sleep infinity
# ```
# I have tried to use `create-react-app` and `composer create-project` to create the frontend and backend directories respectively. However, I am getting the following error:
# ```
# Creating frontend directory...
# Creating a new React app in /app/frontend.


