const { system } = require('nodemon/lib/config');
const pool = require('../config/db');
const { hashPassword, comparePasswords } = require('./securePassword');


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
const decreaseBalance = async ( userID , amount ) => {
    try {
        const query = {
            text: 'UPDATE users SET balance = balance + $1 WHERE id = $2' ,
            values : [amount , userID]
        }
        try {
            const result = await pool.query(query);
        } catch(error){
            console.error('Error updating balance:', error);
        }
    } catch(error){
        console.error("problem with decrease balance function",error);
    }
}






module.exports = {
    checkEmailExists,
    checkPasswordCorrect,
    createUser, 
    getUserID
};