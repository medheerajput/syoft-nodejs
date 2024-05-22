const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("connected with mongoDB")
}).catch((err) => {
    console.log(err)
})