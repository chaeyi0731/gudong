const express = require('express');
const mysql = require('mysql2');
const app = express();
const PORT = 3001;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'admin',
  password: '1234',
  database: 'my_db',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('서버에 연결 되어있습니다');
  const createTable = `CREATE TABLE IF NOT EXISTS example_table (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
  )`;
  connection.query(createTable, (err) => {
    if (err) throw err;
    console.log('Example table created');
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
