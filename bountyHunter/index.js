const express = require("express")
const app = express()
const morgan = require("morgan")
app.use(morgan('dev'))
app.use(express.json())

app.use("/bounties", require("./bounties"))

app.listen(8000, ()=>{
    console.log('hello')
})