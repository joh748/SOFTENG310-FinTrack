const pool = require('./db');

// Query to check if users table exists
const checkUsersTableQuery = `
  SELECT EXISTS (
    SELECT FROM information_schema.tables 
    WHERE table_schema = 'public' 
    AND table_name = 'users'
  );
`;

// Query to create users table
const createUserTableQuery = `
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP , 
    balance DOUBLE PRECISION DEFAULT 0.0

  );
`;

async function createTables() {
  try {
    // Check if users table exists
    const { rows: usersTableExists } = await pool.query(checkUsersTableQuery);
    if (!usersTableExists[0].exists) {
      // Create users table
      await pool.query(createUserTableQuery);
      console.log('Users table created successfully');
    } else {
      console.log('Users table already exists');
    }
  } catch (error) {
    console.error('Error creating tables:', error);
  } 
}

module.exports = createTables;
