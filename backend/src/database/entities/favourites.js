const mysql = require("mysql2/promise");
const { mysqlConfig } = require("../../config");

// Post Favourites
exports.postFav = async (user_id, asset_code) => {
  const con = await mysql.createConnection(mysqlConfig);
  const [result] = await con.execute(
    `
        INSERT INTO favourites(user_id, asset_code)
        VALUES(?, ?)
        `,
    [user_id, asset_code]
  );
  await con.end();
  return result;
};

// Get Favourites
exports.getFav = async (id) => {
  const con = await mysql.createConnection(mysqlConfig);
  const [result] = await con.execute(
    `
          SELECT asset_code FROM favourites
          WHERE user_id = ?
          `,
    [id]
  );
  await con.end();
  return result;
};
