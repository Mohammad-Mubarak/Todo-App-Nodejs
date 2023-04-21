const User = require("../model/user")
const bcrypt = require("bcryptjs")
const Todo = require("../model/Todo.js")


exports.todo = async (req, res) => {
        try {

                const task = req.body.task

                // geting user id from session
                const ID = req.session.userid;

                // stroing in data base
                const taskadded = await Todo.create({
                        task,
                        userId: ID
                })

                await taskadded.save()

        } catch (error) {
                res.status(500).send("Server Error");
        }
}

exports.deletetodo = async (req, res) => {
        try {
                const request = req.body
                const {
                        ID
                } = request.id
                await Todo.findByIdAndDelete(request.id);
        } catch (error) {
                res.status(500).send("Server Error");
        }
}


exports.getAllTask = async (req, res) => {
        try {

                const ID = req.session.userid;
                const tasks = await Todo.find({
                        userId: ID
                })

                /// sending data and rending in userboard
                res.render("todo", {
                        tasks
                })
        } catch (error) {
                res.status(500).send("Server Error");
        }

}




exports.updatetodo = async (req, res) => {
        try {
                const request = req.body.data
                const text = request.text

                const id = request.id

                // finding by id and updating task  
                await Todo.findByIdAndUpdate(id, {
                        task: text
                })

        } catch (error) {
                res.status(500).send("Server Error");
        }

}





exports.AdminView = async (req, res) => {
        try {

                const TotalUsers = await User.find({})


                let AllUsers = []

                for (let i = 0; i < TotalUsers.length; i++) {
                        let temp = {}
                        temp.name = TotalUsers[i].name
                        temp.email = TotalUsers[i].email

                        temp.id= TotalUsers[i]._id
                        AllUsers.push(temp);
                }
                res.render("Admin", {
                       AllUsers
                })
        } catch (error) {
                res.status(500).send("Server Error");
        }

}



exports.ShowTasks = async (req, res) => {
        try {

           const id =req.params.id

           


           const data = await Todo.find({ userId:id})

           

           res.render("UserAllTasks",{data})

        // res.render("UserTasks")
        } catch (error) {
                res.status(500).send("Server Error");
        }

}