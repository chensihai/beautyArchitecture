#git clone https://github.com/chensihai/test-fiyge.git \n
#cd test-fiyge \n
#docker-compose -f Architecture/docker-compose-init.yml up -d --build // this prepare codebase \n
After few minutes \n
#docker-compose -f Architecture/docker-compose.yml up -d --build //this bring up 4 containers, backend for Lumen, frontend for Reactjs, db for mysql, and phpmyadmin to use for database admin \n

When ready, you can access from browser and test register/login and form design functions \n
http://localhost:3000 \n\n

http://localhost:8081 database access
