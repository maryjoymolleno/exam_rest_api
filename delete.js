const DB = require('../database/Conection')

module.exports = async (id) => {
  try {
    const query = DELETE FROM  +
                    accounts  +
                  WHERE  +
                    id = ${id}

    await DB(query)

    return true
  } catch (error) {
    return false
  }
}