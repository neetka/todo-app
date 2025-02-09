//write basic express boilerplate code, with express.json() middleware
const express = require("express");
const { createTodo } = require("./types");
const { parse } = require("postcss");
const cors = require ("cors");
const { todo } = require("./db");
const app = express();
app.use(express.json());
app.use(cors());
app.post("/todo", async function(req, res){
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
   
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.status(200).json({
        msg: "Todo created"
    })
})
app.get("/todos", async function(req, res){
    const todos = await todo.find({});
    res.json({
        todos
    })
})
app.put("/completed", async function(req, res){
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
    await todo.update ({
        _id: req.body.id
    }, {
        completed: true
    })
    res.json({
        msg: "Todo marked as completed"
    })
})
app.listen(4000,()=>{
    console.log("thanks to arvind")
});