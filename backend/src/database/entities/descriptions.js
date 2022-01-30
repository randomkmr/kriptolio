const mysql = require("mysql2/promise");
const { mysqlConfig } = require("../../config");

// Get Description
exports.getDesc = async (asset_code) => {
  const con = await mysql.createConnection(mysqlConfig);
  const [result] = await con.execute(
    `
          SELECT description FROM descriptions
          WHERE asset_code = ?
          `,
    [asset_code]
  );
  await con.end();
  return result;
};
