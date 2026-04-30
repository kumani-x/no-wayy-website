# Content Creator Tracker API

## Overview
My Content Creator Tracker API is linked to my previous assignment. 

My API helps users manage content creators or themselves and their details such as platform and follower count. The API is built using Node.js, Express, and MySQL.

## Purpose
The API is meant to reflect a real-world system where content creators or a small creative talent-management team can manage creator data and track their performance.

## Technologies Used
- Node.js
- Express.js
- MySQL
- mysql2
- dotenv

## Setup Instructions

### 1. Clone the repository

```bash
git clone <repo-link>
cd assignment-4/content-creator-tracker-api
```
### 2. Install Dependencies

```bash
npm install
```

### 3. Create a .env file
Create a file called .env in the root folder and add the following information:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=content_creator_tracker
DB_PORT=3306
PORT=3000
```
### 4. Set up the database

Make sure you have MySQL running and the `content_creator_tracker` database and `creators` table exist for the API  to work.

You can use the SQL script located in this repository to create the database, tables, and insert sample data.

The sql files are named : 
- `schema.sql` 
- `queries.sql`

### 5. Run the server

In the terminal run:

```bash
npm start
```

### 6. Test the API

Open Postman and input:

 GET- `http://localhost:3000`

The output should be: `API is running`.

You are now ready to explore the API using Postman :tada: !

## Features
The Content Creator Tracker API have the following various features:
- Create new creator accounts (`POST`).
- Retrieve all creators (`GET`).
- Retrieve a specific creator by ID (`GET`).
- Update existing creator information (`PUT`).
- Delete creators from the database (`DELETE`).
- View the top-performing posts using an INNER JOIN between the posts and analytics table (`GET /analytics/top-posts`).
- The option to update a creator's follower count (`PATCH`).
- Has input validation and error handling.
- MySQL database integration.

### Create a new creator

If you want to test and experiment with the API you can use this example to create a new creator account:

POST /creators

Body:
```json
{
  "account_name": "RunwayWithLeila",
  "platform": "Instagram",
  "follower_count": 112000,
  "content_niche": "fashion"
}
```

### Existing creator

You can use this example to test if you created a new creator account, this requires an ID:


```json
{
  "creator_id": 9, 
  "account_name": "RunwayWithLeila",
  "platform": "Instagram",
  "follower_count": 112000,
  "content_niche": "fashion"
}
```

You can use the ID to test:

- GET /creators/9
- PUT /creators/9
- DELETE /creators/9

### Example that already exists on the database

You can use this example to test the other endpoints:

```json

{
    "creator_id": 2,
    "account_name": "JodiCanCook",
    "platform": "TikTok",
    "follower_count": 30700,
    "content_niche": "food"
}

```
This example you can test:

- GET /creators/2
- PUT /creators/2
- DELETE /creators/2
