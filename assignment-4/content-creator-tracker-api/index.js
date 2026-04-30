/* Content Creator Tracker API:
This API tracks creator/social media accounts
, including account name, platform, followers, niche, and date added.*/ 

require('dotenv').config();
const PORT = process.env.PORT || 3000;

// basic express setup
const express = require('express');
const mysql = require('mysql2');

const app = express();
const PORT = 3000;

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_NAME,
    connectionLimit: 10,
    waitForConnections: true,
});

// Retrieves all creators from sql
app.get('/accounts', (req, res) => {
    pool.query('SELECT * FROM creators', (err, results) => {
    if (err) {
        return res.status(500).json({
        error: err.message
         });
    } 
    res.status(200).json(results);
});
});

app.use(express.json()); // allows JSON data
app.use(express.urlencoded({extended: true}));

// test to make sure API is working 
app.get('/', (req, res) => {
    res.send('API is running');
});

// Retrieving data of all accounts

const accounts = [
    { id: 1,
    account_name: "ZaysInCTRL" }
 ];

app.get('/accounts', (req, res) => {
  console.log("accounts route hit");    
  res.status(200).json(accounts);
});

//Shows one creator account by ID

app.get('/accounts/:id', (req, res) => {
    // convert id from string to integer
    const id = parseInt(req.params.id);
    console.log("account id hit");
    // finding specific account id 
    const account = accounts.find(acc => acc.id === id);
    
if (account) {
    res.status(200).json(account);
} else {
    res.status(404).json({
        error: "Account not found"
    });
  }
});

// creating new account 

app.post('/accounts', (req, res) => {
    const {account_name, platform, follower_count, content_niche } = req.body;
    //console.log(req.body);
// validation
    if(!account_name || !platform) {
        return res.status(400).json({
            error: "account_name and platform are required"
        });
    }
// sql insert
const query = `
INSERT INTO creators (account_name, platform, follower_count, content_niche) 
VALUES (?,?,?,?)`;

pool.query(
    query, [account_name, platform, follower_count, content_niche], 
    (err, results) => {
    if(err) {
        return res.status(500).json({
            error: err.message
        });
    }
    //const newAccount = req.body;
    res.status(201).json({
     message: "New creator account created",
     id: results.insertId
    });  
   } 
  );
});

//  Update an account

app.put('/update-accounts/:id', (req,res) => {
    const id = req.params.id;
    const {account_name, platform, follower_count, content_niche } = req.body;

    // validation
    if(!account_name || !platform) {
        return res.status(400).json({
            error: "account_name and platform are required"
        });
    }

// sql insert
const sql = 'UPDATE creators SET account_name = ?, platform = ?, follower_count = ?, content_niche = ? WHERE creator_id = ?';

pool.query(
    sql,
    [account_name, platform, follower_count, content_niche, id],
    (err, results) => {
    if(err) {
        console.error('Error updating creator:', err.message)
        return res.status(500).json({
            error: err.message
        });
    } 
    if (results.affectedRows === 0) {
        return res.status(404).json({
            error: "Creator not found"
        });
    }
    res.status(200).json({
     message: `Creator ${id} has been updated successfully`,
    });  
   }); 
  });

// Deleting an account

app.delete('/delete-accounts/:id', (req, res) => {
    const accountId = req.params.id;

// sql insert
const sql = 'DELETE FROM creators WHERE creator_id = ?';

pool.query(sql, [accountId], (err, result)=> {
    if(err) {
        console.error('Error deleting creator:', err.message);
        return res.status(500).json({ error: 'Database error'});
    }

    if(result.affectedRows === 0) {
        return res.status(404).json({error: 'Creator not found'})
    }
    res.status(200).json({message: 'Creator deleted successfully'});
});
}); 

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

//GET /accounts
//Shows all creator accounts

//GET /accounts/:id
//Shows one creator account by ID

//POST /accounts
//Adds a new creator account