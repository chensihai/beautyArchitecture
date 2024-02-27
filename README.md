<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Beauty Architecture</title>
</head>
<body>

    <h1>Beauty Architecture</h1>

    <p>This project leverages Lumen for the backend API and ReactJS for the frontend, encapsulated within Docker containers to ensure a streamlined, isolated development environment.</p>

    <h2>Features</h2>
    <ul>
        <li>User authentication: Login/Register functionality.</li>
        <li>CRUD operations through a user-friendly interface.</li>
        <li>Docker-compose for simplified setup and deployment.</li>
    </ul>

    <h2>Quick Start</h2>
    <p>Clone the repository:</p>
    <pre><code>git clone https://github.com/chensihai/beauty-architecture.git
cd beauty-architecture
</code></pre>

    <p>Initialize the codebase:</p>
    <pre><code>docker-compose -f Architecture/docker-compose-init.yml up -d --build
</code></pre>

    <p>Wait a few minutes for the initialization to complete. Then, bring up the containers:</p>
    <pre><code>docker-compose -f Architecture/docker-compose.yml up -d --build
</code></pre>

    <p>This command starts 4 containers:</p>
    <ul>
        <li><code>backend</code>: The Lumen backend API.</li>
        <li><code>frontend</code>: The ReactJS frontend.</li>
        <li><code>db</code>: The MySQL database.</li>
        <li><code>phpmyadmin</code>: A web interface for database administration.</li>
    </ul>

    <h2>Accessing the Application</h2>
    <ul>
        <li>Frontend: <a href="http://localhost:3000">http://localhost:3000</a> - Access the ReactJS frontend.</li>
        <li>Database Admin: <a href="http://localhost:8081">http://localhost:8081</a> - Access phpMyAdmin for database management.</li>
    </ul>

    <h2>License</h2>
    <p>This project is open-sourced under the MIT License. See the LICENSE file for more details.</p>

</body>
</html>
