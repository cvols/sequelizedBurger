// dependencies
var Sequelize = require('sequelize')

// creating mysql connection using Sequelize
var sequelize = new Sequelize('burgers_db', 'chris', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 1000
    }
})

// heroku connection
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'chris',
        password: 'password',
        database: 'burgers_db'
    })
}

module.exports = seqeulize