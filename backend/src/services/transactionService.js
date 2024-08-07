
const { system } = require('nodemon/lib/config');
const pool = require('../config/db');




const getUserTransactionsByPage = async(userID , pageNumber) => {

    const pageSize = 10;
    const offset = (pageNumber - 1) * pageSize;
    try {
        const query = {
            text: `
                SELECT * FROM transactions 
                WHERE user_id = $1 
                ORDER BY created_at ASC 
                LIMIT $2 
                OFFSET $3
            `,
            values: [userID, pageSize, offset]
        };
        try {
            const result = await pool.query(query);
            return result.rows;
        } catch{
            console.error("error when getting transactions" , error);
        }
    }catch {
        console.error("error in function start" , error);
    }
}

const makeTransaction = async ( userID , amount , title , description) => {
    try {
        const addTransactionQuery = {
            text: 'INSERT INTO transactions (user_id , amount , title , description) VALUES ($1, $2, $3, $4)'
                    ,
            values : [ userID, amount , title , description ]
        }
        const changeBalanceQuery = {
            text :  'UPDATE users SET balance = balance + $1 WHERE id = $2',
            values: [amount , userID]
        }
        try {
            const result = await pool.query(addTransactionQuery);
            const result2 = await pool.query(changeBalanceQuery);
            console.log(`succesfuly made transaction user_id : ${userID} , amount : ${amount} , title : ${title} , description : ${description}`)
        } catch(error){
            console.error('Error updating balance:', error);
        }
    } catch(error){
        console.error("problem with decrease balance function",error);
    }
}

module.exports  = {
    makeTransaction,
    getUserTransactionsByPage
}