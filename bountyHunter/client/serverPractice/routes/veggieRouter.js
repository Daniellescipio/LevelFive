const express = require("express")
const veggieRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

const veggie = [
    {name: "carrot",
    color: "orange",
    _id: uuidv4()},
    {name: "spinach",
    color: "green",
    _id: uuidv4()},
    {name: "cabbage",
    color: "purple",
    sweet:true,
    _id: uuidv4()},
    {name: "cucumber",
    color: "green",
    _id: uuidv4()
    },
    {name: "pepper",
    color: "red",
    _id: uuidv4()
    }

]
//get all
veggieRouter.get("/", (req, res)=>{
    res.send(veggie)
})
//get one
veggieRouter.get("/:veggieId", (req, res)=>{
    const veggieId = req.params.veggieId
    const foundVeggie = veggie.find((veggie)=>veggie._id===veggieId)
    res.send(foundVeggie) 
})
// get by group
veggieRouter.get("/search/color",(req,res)=>{
    const color = req.query.color
    const onlyThoseColors = veggie.filter(veggie => color === veggie.color)
    res.send(onlyThoseColors)
})
veggieRouter.get("/search/type",(req,res)=>{
    const type = req.query.type
    const onlyThosetypes = veggie.filter(veggie => type === veggie.type)
    res.send(onlyThosetypes)
})
//add one
veggieRouter.post("/", (req, res)=>{
    req.body._id = uuidv4()
    veggie.push(req.body)
    res.send(`You successfully added a ${req.body.name} to the salad`)
})
//delete one 
veggieRouter.delete("/:veggieId", (req, res)=>{
    const veggieId = req.params.veggieId
    const veggieIndex = veggie.findIndex(veggie => veggie._id === veggieId)
    veggie.splice(veggieIndex, 1)
    res.send(`You successfully removed a vegetable from the salad`)
})
//update one
veggieRouter.put("/:veggieId", (req, res)=>{
    const veggieId = req.params.veggieId
    const veggieObject = req.body
    const veggieIndex = veggie.findIndex(veggie => veggie._id === veggieId)
    const updatedVeggie = Object.assign(veggie[veggieIndex], veggieObject)
    res.send(updatedVeggie)
})
module.exports= veggieRouter