USE content_creator_tracker;

-- ===============
-- BASIC QUERIES
-- ===============

SELECT 
    *
FROM
    posts
WHERE
    status = 'posted';

-- =====================
-- FILTERING & SORTING
-- =====================

-- I used a query to show basic information of each content creator and ordered by follower count.

SELECT 
    account_name, follower_count, content_niche
FROM
    creators
ORDER BY follower_count DESC;

-- This query shows all posted content from newest to oldest.

SELECT 
    post_id, caption, status, date_posted
FROM
    posts p
WHERE
    status = 'posted'
ORDER BY date_posted DESC;

-- I filtered all the vlog posts and ordered by newest to oldest date.
SELECT 
    *
FROM
    posts
WHERE
    content_type = 'vlog'
ORDER BY date_posted DESC;

-- ==========
-- JOINS
-- ==========

-- I used a LEFT JOIN to show all post and their views, ordered from highest to lowest.

SELECT 
    p.post_id, p.caption, p.status, a.views
FROM
    posts p
        LEFT JOIN
    analytics a ON p.post_id = a.post_id
ORDER BY a.views DESC;

/* I used an INNER JOIN to merge the highest performing videos 
with their views and likes, ordered by views */

SELECT 
    p.creator_id, p.caption, a.views, a.likes
FROM
    posts p
        INNER JOIN
    analytics a ON p.post_id = a.post_id
ORDER BY views DESC
LIMIT 5;

SELECT 
    c.account_name, p.caption, p.status
FROM
    creators c
        INNER JOIN
    posts p ON c.creator_id = p.creator_id
ORDER BY c.account_name ASC;

-- =====================
-- AGGREGATE FUNCTIONS
-- =====================

SELECT 
    COUNT(*) AS posts_over_20000
FROM
    analytics
WHERE
    views > 20000;

-- I used an aggregate function which calculates average likes received for accounts that uploaded food content.

SELECT 
    AVG(likes)
FROM
    analytics a
        INNER JOIN
    posts p ON a.post_id = p.post_id
WHERE
    p.content_type = 'food';

-- I used an aggregate function to calculate the average engagement for each content type.

SELECT 
    content_type, AVG(a.views) AS average_views
FROM
    posts p
        JOIN
    analytics a ON p.post_id = a.post_id
GROUP BY content_type;

/* This aggregate function shows which creator is performing best overall,
this function would be practical for small talent company. */

SELECT
	c.account_name,
    SUM(a.views) AS total_views
FROM creators c
JOIN posts p ON c.creator_id = p.creator_id
JOIN analytics a ON p.post_id = a.post_id
GROUP BY c.account_name
ORDER BY total_views DESC;


-- =====================
-- BUILT-IN FUNCTIONS
-- =====================

SELECT 
    CONCAT(account_name, ' - ', content_niche) AS creator_info
FROM
    creators;

-- I used the LOWER function so the captions were in lowercase for text consistency.

SELECT 
    LOWER(caption) AS lower_case_captions
FROM
    posts;
    
-- ====================
-- STORED FUNCTION
-- ====================  
 
-- I created a user-defined function that calculates a post's engagement rate.

DROP FUNCTION IF EXISTS post_engagement;

DELIMITER // 
CREATE FUNCTION post_engagement(p_post_id INT)
RETURNS DECIMAL(10, 2)
DETERMINISTIC
BEGIN
	DECLARE engagement_rate DECIMAL(10, 2);
	SELECT ((likes + comments + shares) * 100.0) / views
    INTO engagement_rate
	FROM analytics 
    WHERE post_id = p_post_id;
    
    RETURN engagement_rate;
END //

DELIMITER ;

-- This query is to show post engagement performance which is formatted to 2nd decimal places.
SELECT 
    p.post_id,
    p.caption,
    ROUND(POST_ENGAGEMENT(p.post_id), 2) AS engagement_percentage
FROM
    posts p
WHERE
    p.status = 'posted'
ORDER BY engagement_percentage DESC;

-- You can use the stored function to calculate the engagement rate for an individual or selected post(s).
SELECT POST_ENGAGEMENT(3) AS engagement_percentage;

-- ======================
-- DELETE QUERY EXAMPLE
-- ======================

-- This query would delete a specific post from the table which had a status of draft.
/*
DELETE FROM posts
WHERE post_id = 9 AND status = "draft";
*/

-- ======================
-- UPDATE QUERY EXAMPLE
-- ======================

-- I used an update query to show how to change the status of draft/scheduled post to be posted.
/*
UPDATE posts
SET status = 'posted',
	date_posted = CURRENT_DATE()
WHERE post_id = 7 AND status != 'posted';
*/



