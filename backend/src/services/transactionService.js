
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
            await pool.query(addTransactionQuery);
            await pool.query(changeBalanceQuery);
            console.log(`succesfuly made transaction user_id : ${userID} , amount : ${amount} , title : ${title} , description : ${description}`)
        } catch(error){
            console.error('Error updating balance:', error);
        }
    } catch(error){
        console.error("problem with decrease balance function",error);
    }
}
const deleteTransaction = async (userID, transactionID) => {
    try {
        // Retrieve the transaction amount to adjust the balance later
        const getTransactionAmountQuery = {
            text: 'SELECT amount FROM transactions WHERE id = $1 AND user_id = $2',
            values: [transactionID, userID],
        };
        const result = await pool.query(getTransactionAmountQuery);
        
        if (result.rows.length === 0) {
            return { success: false, message: 'Transaction not found or does not belong to user' };
        }

        const amount = result.rows[0].amount;

        // Delete the transaction
        const deleteTransactionQuery = {
            text: 'DELETE FROM transactions WHERE id = $1 AND user_id = $2',
            values: [transactionID, userID],
        };

        // Update the user's balance
        const updateBalanceQuery = {
            text: 'UPDATE users SET balance = balance - $1 WHERE id = $2',
            values: [amount, userID],
        };

        await pool.query(deleteTransactionQuery);
        await pool.query(updateBalanceQuery);

        return { success: true, message: 'Transaction deleted and balance updated successfully' };
    } catch (error) {
        console.error('Error deleting transaction:', error);
        throw error;
    }
};
module.exports  = {
    makeTransaction,
    getUserTransactionsByPage,
    deleteTransaction
}