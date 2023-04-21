const express = require('express')
const router = express.Router()
const Todo= require("../model/Todo")
const {signup} =require("../controller/Signup")
const {login} = require("../controller/login")
const { todo ,getAllTask,deletetodo,updatetodo,AdminView,ShowTasks} = require('../controller/Task')




router.route("/").get((req,res)=>{
    res.render("login")
}).post(login)

router.route("/signup").get((req,res)=>{
    res.render("signup")
}).post(signup)


router.route("/user/todo").get(getAllTask).post(todo)

router.route("/user/delete").delete(deletetodo)



router.route("/update/todo").put(updatetodo)



router.route("/update/todo").put(updatetodo)



router.route("/admin").get(AdminView)


router.route(`/user/task/view/:id`).get(ShowTasks)


module.exports = router



