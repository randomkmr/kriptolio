const mysql = require("mysql2/promise");
const { mysqlConfig } = require("../../config");

// Get Assets
exports.getAssets = async (id) => {
  const con = await mysql.createConnection(mysqlConfig);
  const [result] = await con.execute(
    `
          SELECT asset_code, buying_price, amount FROM portfolio
          WHERE user_id = ?
          `,
    [id]
  );
  await con.end();
  return result;
};

// Post Asset
exports.postAsset = async (user_id, asset_code, buying_price, amount) => {
  const con = await mysql.createConnection(mysqlConfig);
  const [result] = await con.execute(
    `
        INSERT INTO portfolio(user_id, asset_code, buying_price, amount)
        VALUES(?, ?, ?, ?)
        `,
    [user_id, asset_code, buying_price, amount]
  );
  await con.end();
  return result;
};
