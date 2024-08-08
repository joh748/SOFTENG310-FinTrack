const { system } = require('nodemon/lib/config');
const pool = require('../config/db');
const { hashPassword, comparePasswords } = require('./securePassword');
const { use } = require('../routes/users');


const getUserID = async (email) => {
    try {
        const query = {
            text: 'SELECT id FROM users WHERE email = $1',
            values: [email],
        };
        const result = await pool.query(query);
        if (result.rows.length > 0) {
            return result.rows[0].id;
        } else {
            return null;
        }
    } catch (error) {
        console.error('An error occurred while getting user ID:', error);
        throw error;
    }
}

const checkEmailExists = async (email) => {
    const query = {
        text: 'SELECT * FROM users WHERE email = $1',
        values: [email],
    };
    const result = await pool.query(query);
    return result.rows.length > 0;
}
const checkPasswordCorrect = async (email, password) => {
    const query = {
        text: 'SELECT password FROM users WHERE email = $1',
        values: [email],
    };
    try{const result = await pool.query(query);
    if (result.rows.length === 0) {
        return false;
    }
    const hashedPassword = result.rows[0].password;
    const passwordsMatch =  await comparePasswords(password, hashedPassword);
    return passwordsMatch;
}
    catch(error){

        console.error('An error occurred while checking password:', error);
        return false; 
    }
    
}
const createUser = async (email, password) => {
    try {
        password = await hashPassword(password); 
        const query = {
            text: 'INSERT INTO users (email, password) VALUES ($1, $2)',
            values: [email, password],
        };
        //check user does not exist
        const userExists = await checkEmailExists(email);
        if (userExists) {
            throw new Error('User already exists');
        }
        else {
            await pool.query(query);
        }
    } catch (error) {
        // error
        console.error('An error occurred while creating user:', error);
        throw error;
    }
}

const getBalance = async (userID) => {
    try {
        const query  = {
            text: 'SELECT balance FROM users WHERE id = $1' ,
            values : [userID]
        }
        try {
            const result = await pool.query(query);
            return result.rows[0];
        } catch (error){
            console.error ("problem when fetching balance" , error);
        }
    }catch{
        console.error("problem before query", error);
    }
}
const getGoal = async (userID) => {
    try {
        const query  = {
            text: 'SELECT goal FROM users WHERE id = $1' ,
            values : [userID]
        }
        try {
            const result = await pool.query(query);
            return result.rows[0];
        } catch (error){
            console.error ("problem when fetching balance" , error);
        }
    }catch{
        console.error("problem before query", error);
    }
}
const setBalance = async (userID, balance) => {
    try {
        const query = {
            text: 'UPDATE users SET balance = $1 WHERE id = $2',
            values: [newBalance, userID],
        };
        const result = await pool.query(query);
        if (result.rowCount > 0) {
            return { success: true, message: 'Balance updated successfully' };
        } else {
            return { success: false, message: 'User not found' };
        }
    } catch (error) {
        console.error('An error occurred while updating balance:', error);
        throw error;
    }
};
const setGoal= async (userID, goal) => {
    try {
        const query = {
            text: 'UPDATE users SET goal = $1 WHERE id = $2',
            values: [newBalance, userID],
        };
        const result = await pool.query(query);
        if (result.rowCount > 0) {
            return { success: true, message: 'Goal updated successfully' };
        } else {
            return { success: false, message: 'User not found' };
        }
    } catch (error) {
        console.error('An error occurred while updating balance:', error);
        throw error;
    }
};






module.exports = {
    checkEmailExists,
    checkPasswordCorrect,
    createUser, 
    getUserID,
    getBalance,
    getGoal,
    setBalance,
    setGoal
};