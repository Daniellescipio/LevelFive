const express = require("express")
const app = express()
app.use(express.json())

app.use("/todo", require("./todo"))

app.listen(9000, ()=>{
    console.log("running")
})