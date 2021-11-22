const db = require("mongoose");
 //connect to db
const connect = async () => {
    const uri = process.env.DB_URL
    await db.connect(uri)
        .then(() => console.log('Connected to Database'))
    db.connection.on('error', e => {
        console.error(`DB connection error: ${e.message}`)
    })
}
module.exports = connect ;