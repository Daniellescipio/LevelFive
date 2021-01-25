const express = require("express")
const app = express()

app.use(express.json())

app.use("/whatever", require("./middleWareFunction"))
app.use("/whatever",(req,res,next)=>{
    res.send(req.body)
})

app.listen(7000, (req,res)=>{
    console.log("hello")
})