const mongoose = require('mongoose')

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log('*******************')
        console.log('***DB CONNECTED****')
        console.log('*******************')
    } catch (error) {
        console.log('ERROR !!!')
        console.log('***DB CONNECTED****')
        console.log('ERROR !!!')
    }
}

module.exports = dbConnect