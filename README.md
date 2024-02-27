  Beauty Architecture

Beauty Architecture
===================

This project leverages Lumen for the backend API and ReactJS for the frontend, encapsulated within Docker containers to ensure a streamlined, isolated development environment.

Features
--------

*   User authentication: Login/Register functionality.
*   CRUD operations through a user-friendly interface.
*   Docker-compose for simplified setup and deployment.

Quick Start
-----------

Clone the repository:

    git clone https://github.com/chensihai/beauty-architecture.git
    cd beauty-architecture
    

Initialize the codebase:

    docker-compose -f Architecture/docker-compose-init.yml up -d --build
    

Wait a few minutes for the initialization to complete. Then, bring up the containers:

    docker-compose -f Architecture/docker-compose.yml up -d --build
    

This command starts 4 containers:

*   `backend`: The Lumen backend API.
*   `frontend`: The ReactJS frontend.
*   `db`: The MySQL database.
*   `phpmyadmin`: A web interface for database administration.

Accessing the Application
-------------------------

*   Frontend: [http://localhost:3000](http://localhost:3000) - Access the ReactJS frontend.
*   Database Admin: [http://localhost:8081](http://localhost:8081) - Access phpMyAdmin for database management.

License
-------

This project is open-sourced under the MIT License. See the LICENSE file for more details.