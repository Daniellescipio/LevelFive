const express = require("express")
const fruitRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

const fruit = [
    {name: "pineapple",
    color: "yellow",
    sweet:true,
    _id: uuidv4()},
    {name: "grapes",
    color: ["green", "purple"],
    sweet:true,
    _id: uuidv4()},
    {name: "mango",
    color: "yellow/orange",
    sweet:true,
    _id: uuidv4()},
    {name: "lemon",
    color: "yellow",
    sweet:false,
    _id: uuidv4()
    },
    {name: "avacado",
    color: "green",
    sweet:false,
    _id: uuidv4()
    }

]

fruitRouter.get("/", (req, res)=>{
    res.send(fruit)
})
fruitRouter.post("/", (req, res)=>{
    req.body._id = uuidv4()
    fruit.push(req.body)
    res.send(`You successfully added a ${req.body.name} to the blender`)
})

module.exports= fruitRouter