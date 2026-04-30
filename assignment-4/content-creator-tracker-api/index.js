/* Content Creator Tracker API:
This API tracks creator/social media accounts
, including account name, platform, followers, niche, and date added.*/

require('dotenv').config();
const PORT = process.env.PORT || 3000;

// BASIC EXPRESS SETUP
const express = require('express');
const mysql = require('mysql2');

const app = express();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    connectionLimit: 10,
    waitForConnections: true,
});

app.use(express.json()); // allows JSON data
app.use(express.urlencoded({ extended: true }));

// test to make sure API is working 
app.get('/', (req, res) => {
    res.send('API is running');
});

// RETRIEVING ALL CREATORS FROM SQL
app.get('/creators', (req, res) => {
    pool.query('SELECT * FROM creators', (err, results) => {
        if (err) {
            console.error('Error retrieving creators:', err.message);
            return res.status(500).json({
                error: err.message
            });
        }
        res.status(200).json(results);
    });
});

//SHOWING ONE CREATOR BY ID

app.get('/creators/:id', (req, res) => {
    //convert id string into integer
    const id = parseInt(req.params.id);
    // validates and checks if the user inputted a integer using 'isNaN'
    if (isNaN(id)) {
        return res.status(400).json({
            error: "Invalid ID"
        });
    }
    //SQL
    // Use 'SELECT * FROM ... WHERE...' as we are finding a specific ID
    pool.query(
        'SELECT * FROM creators WHERE creator_id = ?',
        [id],
        (err, results) => {
            if (err) {
                console.error('Error retrieving creator by ID:', err.message);
                return res.status(500).json({
                    error: err.message
                });
            }
            // results.length counts of the number of creators retured by the SELECT query
            if (results.length === 0) {
                return res.status(404).json({
                    error: "Creator not found"
                });
            }
            res.status(200).json(results[0]);
        }
    );
});

// CREATING A CREATOR

app.post('/creators', (req, res) => {
    const { account_name, platform, follower_count, content_niche } = req.body;

    // validation if they didn't input an account name or platform
    if (!account_name || !platform) {
        return res.status(400).json({
            error: "account_name and platform are required"
        });
    }
    // SQL 
    // USE SQL 'INSERT INTO' AS WE ARE CREATING A CREATOR 
    const query = `
INSERT INTO creators (account_name, platform, follower_count, content_niche) 
VALUES (?,?,?,?)`;

    pool.query(
        query, [account_name, platform, follower_count, content_niche],
        (err, results) => {
            if (err) {
                console.error('Error creating creator:', err.message);
                return res.status(500).json({
                    error: err.message
                });
            }

            res.status(201).json({
                message: "New creator account created",
                id: results.insertId
            });
        }
    );
});

//  UPDATE A CREATOR

app.put('/creators/:id', (req, res) => {
    // convert id string into integer
    const id = parseInt(req.params.id);
    // validates and checks if the user inputted a integer using 'isNaN'
    if (isNaN(id)) {
        return res.status(400).json({
            error: "Invalid ID"
        });
    }

    const { account_name, platform, follower_count, content_niche } = req.body;

    // validation

    if (!account_name || !platform) {
        return res.status(400).json({
            error: "account_name and platform are required"
        });
    }

    // SQL
    // TO UPDATE A TABLE WE USE 'UPDATE ... SET ..... WHERE...' 
    const sql = 'UPDATE creators SET account_name = ?, platform = ?, follower_count = ?, content_niche = ? WHERE creator_id = ?';

    pool.query(sql, [account_name, platform, follower_count, content_niche, id],
        (err, results) => {
            if (err) {
                console.error('Error updating creator:', err.message)
                return res.status(500).json({
                    error: err.message
                });
            }
            // results.affectedRows shows how many rows were updated
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

// endpoint can find the top performing posts

app.get('/analytics/top-posts', (req, res) => {
    const sql = `
    SELECT 
        p.creator_id, p.caption, a.views, a.likes
    FROM
        posts p
            INNER JOIN
        analytics a ON p.post_id = a.post_id
    ORDER BY views DESC
    LIMIT 5
    `;
    pool.query(sql, (err, results) => {
        if (err) {
            console.error('Error retrieving top posts:', err.message);
            return res.status(500).json({
                error: err.message
            });
        }
        res.status(200).json(results);
    });
});

// UPDATING A CREATOR'S FOLLOWER COUNT

// PATCH is used as we are updating a specific within a column
app.patch('/creators/:id/followers', (req, res) => {

    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        return res.status(400).json({
            error: "Invalid ID"
        });
    }
    const { follower_count } = req.body;

    // checking if follower count is valid integer e.g. not negative or a string

    if (follower_count === undefined || isNaN(follower_count) || follower_count < 0) {
        return res.status(400).json({
            error: "follower_count must be a positive valid number"
        });
    }
    const sql = 'UPDATE creators SET follower_count = ? WHERE creator_id = ?';

    pool.query(sql, [follower_count, id], (err, result) => {
        if (err) {
            console.error('Error updating follower count:', err.message);
            return res.status(500).json({ error: err.message });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Creator not found' })
        }
        res.status(200).json({
            message: 'Follower count successfully updated'
        });
    });
});

// DELETING A CREATOR

app.delete('/creators/:id', (req, res) => {
    // convert id string into integer
    const id = parseInt(req.params.id);
    // validates and checks if the user inputted a integer using 'isNaN'
    if (isNaN(id)) {
        return res.status(400).json({
            error: "Invalid ID"
        });
    }

    // SQL
    // USE 'DELETE FROM...WHERE...'
    const sql = 'DELETE FROM creators WHERE creator_id = ?';

    pool.query(sql, [id], (err, result) => {
        if (err) {
            console.error('Error deleting creator:', err.message);
            return res.status(500).json({ error: err.message });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Creator not found' })
        }
        res.status(200).json({ message: 'Creator deleted successfully' });
    });
});


app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});

