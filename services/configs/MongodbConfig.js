const mongoose = require("mongoose")


mongoose.connect("mongodb://localhost:27017/myshop",{useNewUrlParser:true})

mongoose.connection.on("connected",()=>{
    console.log("mongodb -> myshop 的连接建立成功了")
})

module.exports = mongoose
