#!/bin/sh

# Check if frontend directory does not exist
# if [ ! -d "/app/frontend" ]; then
  echo "Creating frontend directory..."
  create-react-app /app/frontend
# fi

# Check if backend directory does not exist
# if [ ! -d "/app/backend" ]; then
  echo "Creating backend directory..."
  composer create-project --prefer-dist laravel/lumen /app/backend
# fi

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


