CREATE TABLE users (
id INT AUTO_INCREMENT PRIMARY KEY,
full_name varchar(30),
email varchar(80) UNIQUE NOT NULL,
password varchar(80) NOT NULL,
reg_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

CREATE TABLE favourites (
id INT AUTO_INCREMENT PRIMARY KEY,
user_id INT NOT NULL,
asset_code varchar(20) NOT NULL
)

CREATE TABLE portfolio (
id INT AUTO_INCREMENT PRIMARY KEY,
user_id INT NOT NULL,
asset_code varchar(20) NOT NULL,
buying_price DECIMAL(10,2) NOT NULL,
amount INT NOT NULL
)

CREATE TABLE descriptions (
id INT AUTO_INCREMENT PRIMARY KEY,
asset_code varchar(20) NOT NULL,
description TEST NOT NULL
)