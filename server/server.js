const express = require("express");
const server = express();
const port = 3000

// Get tasks
server.get("/tasks", (req,res) => {
    res.send("Get tasks");
})

// Create task
server.post("/tasks", (req,res) => {
    res.send("Create tasks");
})

// Create task
server.delete("/tasks/:id", (req,res) => {
    
    const taskId= req.params.id;

    res.send("Deleted task with id: " + taskId);
})


// Create task
server.put("/tasks/:id", (req,res) => {
    
    const taskId= req.params.id;

    res.send("Updated task with id: " + taskId);
})

// START SERVER
server.listen(port, ()=>{
    console.log("Server started on port:",port);
})