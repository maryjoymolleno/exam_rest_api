const mysql = require('mysql')

const dbConfig = {
  host: "localhost",
  user: "root",
  password: "",
  port: 3306,
  database: "nodejs-mysql"
}

const db = mysql.createPool(dbConfig)

module.exports = (query) => {
  return new Promise((resolve, reject) => {
    db.getConnection((error, sql) => {
      if (error) {
        console.log("Database error: ", error)
        reject(error)
      } else {
        sql.query(query, (error, results) => {
          if (error) {
            console.log("Query error: ", error)
            reject(error)
          } else {
            resolve(results)
          }

          sql.release()
        })
      }
    })
  })
}