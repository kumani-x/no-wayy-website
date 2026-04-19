# Content Creator Tracker

## Project Overview
This porject is a content creator tracker database which stores information about the creators, thei posts and even their post performance.

## Purpose
The purpose of this database is to show how content creators or small talent management teams can organise content and track performance. I chose this theme because I am strong interest in content creation and wanted to create a database relevant to real-world use.

## Database Structure
The tracker includes 3 tables:
- `creators`- this stores creator's details such as name, platform, follower count, content niche.
- `posts` - this stores post details such as caption, content type, status (posted, draft, scheduled, and whether the post was promoted or not)
- `analytics` - this stores the performance of each post such as views, likes, comments, and shares.

All of the tables are linked using primary and foreign keys.

## Features
My content creator tracker includes:
- Linked tables using primary and foreign keys
- Added mock data into each table
- Filtered and sorted data
- Joins across related tables
- I used aggregate functions such as `COUNT()`, `AVG()`, and `SUM()`
- I used built-in functions such as `CONCAT()`, `LOWER()`, `ROUND()`, and `CURRENT_DATE()`
- Created a user-defined function to calculate engagement rate
- Update and delete query examples

## Real-Life Use
This database can be used by an individual to help track:
- Which posts perform best
- Monitor engagement
- And manage post progress from draft to scheduled to posted.

For example, I could use it to track my food content I push out on TikTok and see which performs best and analyse relationships.

It can also be used by a small talent management team. For example, my sister is currently building a small creative-sports talent management agency, and a system like this database can monitor multiple creators, analyse and compare their performance as well as support decision-making using the analytics.

## Files
- `content-creator-tracker.sql` - contains database setup and insert values
- `script.sql` - contains queries and functions