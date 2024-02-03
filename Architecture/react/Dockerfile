FROM node:16.17.0-alpine3.15

# Set the working directory
WORKDIR /app


# # # install react cli
# RUN npm install -g create-react-app
# # # create app
# RUN create-react-app /app
COPY ./frontend /app


# Command to run the app
EXPOSE 3000
CMD ["npm", "start"]
