const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const userrouter= require("./routes/UserTodo.js")
var expressLayouts = require('express-ejs-layouts');
const ejs = require("ejs");
const cookieParser = require("cookie-parser");
const session = require('express-session');

require("./connection/connection")

//cookie and fileupload middleware
app.use(cookieParser());

app.use(session({
    secret: 'my-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }));



//  middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use(expressLayouts);




app.use("/",userrouter)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))