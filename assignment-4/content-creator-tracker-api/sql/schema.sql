-- ==============
-- DATABASE SETUP
-- ==============

-- Create database if it doesn't already exists.
CREATE DATABASE IF NOT EXISTS content_creator_tracker; 
USE content_creator_tracker; 

-- DROP used incase tables needed resetting.

-- DROP TABLE IF EXISTS analytics;
-- DROP TABLE IF EXISTS posts;
-- DROP TABLE IF EXISTS creators;

-- Verify if tables were created.
SHOW TABLES;

-- =========
-- TABLES
-- =========

CREATE TABLE creators (
    creator_id INT PRIMARY KEY AUTO_INCREMENT,
    account_name VARCHAR(50) UNIQUE,
    platform VARCHAR(50) NOT NULL,
    follower_count INT,
    content_niche VARCHAR(50)
);
-- Table shows most recent posts from content creators
CREATE TABLE posts (
    post_id INT PRIMARY KEY AUTO_INCREMENT,
    creator_id INT,
    caption TEXT NOT NULL,
    content_type VARCHAR(50) NOT NULL,
    date_posted DATE,
    status VARCHAR(20) NOT NULL,
    is_promoted BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (creator_id)
        REFERENCES creators (creator_id)
);
-- Analytics table shows the performance of most recent posts
CREATE TABLE analytics (
    post_id INT PRIMARY KEY,
    views INT NOT NULL,
    likes INT NOT NULL,
    comments INT NOT NULL,
    shares INT NOT NULL,
    FOREIGN KEY (post_id)
        REFERENCES posts (post_id)
); 
-- ===============
-- INSERTING DATA
-- ===============

INSERT INTO creators (account_name, platform, follower_count, content_niche)
VALUES
('FoodByZay', 'TikTok', 5390, 'food'),
('JodiCanCook', 'TikTok', 30700, 'food'),
('DailyEatsLei', 'TikTok', 136700, 'food'),
('StyledByYvonne', 'TikTok', 105000, 'fashion'),
('GlowWithHeidi', 'TikTok', 526500, 'fashion'),
('TabaraLifts', 'TikTok', 11500, 'gym'),
('LifeWithV', 'TikTok', 439300, 'lifestyle'),
('DailyUnscripted', 'TikTok', 37800, 'lifestyle');

-- Basic retrieval query to show table contents
SELECT 
    *
FROM
    creators;

INSERT INTO posts (creator_id, caption, content_type, status, date_posted, is_promoted)
VALUES
(1, 'When I cook for myself vs when I cook for others', 'food', 'posted','2026-04-13', FALSE),
(1, 'The fluffiest cinnamon buns!!!', 'food', 'scheduled', NULL, TRUE),
(1, 'Food I made this week 🥘✨', 'food', 'posted', '2026-04-12', FALSE),
(2, 'My meal prep for the week', 'food', 'posted', '2026-04-13', FALSE),
(2, 'ASMR: fresh sourdough bread 🍞', 'food', 'posted', '2026-04-13', FALSE),
(3, 'Would you try this hidden gem 💎', 'food', 'posted', '2026-04-11', TRUE),
(3, 'New Caribbean restaurant opening in Leicester 🇯🇲🇲🇸','food', 'draft', NULL, TRUE),
(4, 'GRWM to go shopping w/ me 🛍️', 'vlog', 'posted', '2026-04-12', FALSE),
(4, 'What I wore to the Oscars 🎬', 'fashion', 'draft', NULL, TRUE),
(5, 'Unbox my new Chanel glasses w/ me 🕶️','fashion', 'posted', '2026-04-11', FALSE),
(6, 'Deadlifting 100kg 💪🏽', 'fitness', 'posted', '2026-04-13', TRUE),
(6, 'My updated leg day workout 🏋️‍♀️', 'fitness','posted', '2026-04-13', TRUE),
(7, 'Day in Life of a Software Engineer 👩‍💻', 'vlog','posted', '2026-04-12', FALSE),
(7,'Come spend the day w/ me 🏙️', 'vlog', 'posted', '2026-04-12', FALSE),
(7, 'My evening routine 🌆', 'lifestyle','posted', '2026-04-11', TRUE),
(8, 'Storytime pt1', 'lifestyle', 'scheduled', NULL, FALSE),
(8, 'Come travel w/ me to Brazil 🇧🇷', 'vlog', 'posted', '2026-04-13', TRUE);

-- Finding post_id from posts to insert correct values in analytics

-- SELECT * FROM posts;

-- post_id values are not continous because draft or scheduled posts do not have analytics.

INSERT INTO analytics (post_id, views, likes, comments, shares)
VALUES
(1, 5200, 780, 85, 55),
(3, 8600, 1200, 143, 92),
(4, 13400, 2170, 264, 189),
(5, 19200, 2820, 327, 210),
(6, 9800, 1400, 160, 110),
(8, 27500, 4240, 527, 350),
(10, 15800, 2300, 285, 190),
(11, 7400, 1130, 130, 85),
(12, 9100, 1350, 170, 120),
(13, 68500, 9200, 1230, 850),
(14, 43800, 6100, 780, 524),
(15, 30100, 4200, 520, 358),
(17, 12100, 1750, 210, 140);

SELECT 
    *
FROM
    analytics;


