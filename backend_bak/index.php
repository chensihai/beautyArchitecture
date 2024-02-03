class Database {
    private static $instance = null;
    private $connection;
    private $host = 'localhost';
    private $username = 'user';
    private $password = 'password';
    private $database = 'mydatabase';
    private $port = '3306';

    private function __construct() {
        $this->connection = new mysqli($this->host, $this->username, $this->password, $this->database, $this->port);

        if ($this->connection->connect_error) {
            die('Database connection failed: ' . $this->connection->connect_error);
        }
    }

    public static function getInstance() {
        if (!self::$instance) {
            self::$instance = new Database();
        }

        return self::$instance;
    }

    public function getConnection() {
        return $this->connection;
    }

    private function __clone() {
        // Prevent cloning
    }

    private function __wakeup() {
        // Prevent unserialization
    }
}

// Usage
$db = Database::getInstance()->getConnection();

// Now you can use $db to execute queries, for example:
$result = $db->query('SELECT * FROM some_table');

//return result as json string
echo json_encode($result->fetch_all(MYSQLI_ASSOC));
