const express = require('express');
const bodyParser = require('body-parser')
const taskRouter = require("./routes/taskRouter")
const session = require('express-session');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 9090;


app.use(express.static('public'));
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(session({
    secret: 'my secret session ilyas suiiii',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true
    }
}))

app.use((req, res, next) => {
    if (!req.session.count)
        req.session.count = 1
    else
        req.session.count++
    // console.log(req.session)
    next()
})




app.get("/",(req,res)=>{
    return res.sendFile(path.join(__dirname,"./index.html"))
})
app.use("/task", taskRouter)

app.listen(port, () => {
    console.log("listenning on port :" + port);
})
