const express = require('express');
const path = require('path');
const { getTasks, addTask, changePriority, deleteTask, ONrefresh } = require('../controllers/taskContoller');
const route = express.Router();




route.get("/", getTasks)

route.post("/", addTask)

route.put("/:id", changePriority)

route.delete("/:id", deleteTask)

route.get("/refresh", ONrefresh)
route.get("/test",(req,res)=>{
    req.query
})

module.exports = route  