const express = require("express");
const session = require("express-session");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes.js");
const createTables = require("./config/createTables.js");
const jwt = require("jsonwebtoken");
const pool = require("./config/db.js");
const isAuthenticated = require("./middleware/autMiddleware.js");




const app = express();

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}));

pool.connect((err) => {
    if (err) {
        console.error('Failed to connect to database:', err);
    } else {
        console.log('Connected to database');
        try {
            createTables();
            console.log("created tables succesfully")
        } catch (error) {
            console.log("error creating tables")
        }
        

    }
});

app.use('/user', isAuthenticated ,  userRoutes);

const port = 4000

app.listen(port, () => {

    console.log(`Server is running on port ${port}`)

})