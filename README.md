#git clone https://github.com/chensihai/test-fiyge.git
#cd test-fiyge
#docker-compose -f Architecture/docker-compose-init.yml up -d --build // this prepare codebase
After few minutes
#docker-compose -f Architecture/docker-compose.yml up -d --build //this bring up 4 containers, backend for Lumen, frontend for Reactjs, db for mysql, and phpmyadmin to use for database admin

When ready, you can access from browser and test register/login and form design functions
http://localhost:3000

http://localhost:8081 database access
