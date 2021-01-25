const express = require("express")
const app = express()
app.use(express.json())

app.use("/veggie", require("./routes/veggieRouter"))
app.use("/fruit", require("./routes/fruitRouter"))

app.listen(9000, ()=>{
    console.log("Hello")
})