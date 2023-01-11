const DB = require('../database/Connection')

module.exports = async (username, password) => {
  try {
    const query = INSERT INTO +
                    accounts  +
                  VALUES  +
                    (null, '${username}', '${password}')

    await DB(query)

    return true
  } catch (error) {
    return false
  }
}