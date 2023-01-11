const DB = require('../database/Connection')

module.exports = async (fields) => {
  try {
    const query = SELECT  +
                    ${fields}  +
                  FROM  +
                    accounts

    const results = await DB(query)

    return results
  } catch (error) {
    return []
  }
}