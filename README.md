#git clone https://github.com/chensihai/test-fiyge.git <br>
#cd test-fiyge <br>
#docker-compose -f Architecture/docker-compose-init.yml up -d --build // this prepare codebase <br>
After few minutes <br>
#docker-compose -f Architecture/docker-compose.yml up -d --build //this bring up 4 containers, backend for Lumen, frontend for Reactjs, db for mysql, and phpmyadmin to use for database admin <br>

When ready, you can access from browser and test register/login and form design functions <br>
http://localhost:3000 <br><br>

http://localhost:8081 database access
