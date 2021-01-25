const express = require("express")
const todoRouter = express.Router()
const {v4:uuidv4} = require("uuid")

let todos = [
    {
        name: "Trash",
        description: "Take out the trash",
        imageUrl: "http://www.myimage....",
        completed: false,
        _id: uuidv4()
    },
    {
        name: "meeting",
        description: "meet with someone important",
        imageUrl: "http://www.myimage....",
        completed: false,
        _id: uuidv4()
    },
    {
        name: "Brush",
        description: "You know...brush...",
        imageUrl: "http://www.myimage....",
        completed: false,
        _id: uuidv4()
    }
]

//get all
todoRouter.get("/",(req,res)=>{
    res.send(todos)
})
//get one
todoRouter.get("/:todoId",(req,res)=>{
    res.send(todos.find(todo=>todo._id === req.params.todoId))
})
//get completed/uncompleted
todoRouter.get("/search/completed",(req,res)=>{
    const completed = req.query.completed
    const filteredArray = todos.filter(todo=>todo.completed === completed)
    res.send(filteredArray)
})
//post one
todoRouter.post("",(req,res)=>{
    req.body._id = uuidv4()
    todos.push(req.body)
    res.send(`${req.body.name} has successfully been added to your todos`)
})
//update one
todoRouter.put("/:todoId",(req,res)=>{
    const index = todos.findIndex(todo => todo._id ===req.params.todoId)
    const updatedTodo = Object.assign(todos[index], req.body)
    res.send(updatedTodo)
})
// delete one
todoRouter.delete("/:todoId",(req,res)=>{
    todos = todos.filter(todo=>todo._id !== req.params.todoId)
    res.send(todos)
  
})

module.exports = todoRouter
