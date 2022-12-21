
const express = require('express')
// require('./db/config');
const User = require("./db/User")
const cors = require("cors")
const app = express()
const path=require("path")
const dotenv =require('dotenv');
const  mongoose  = require('mongoose');
dotenv.config()



mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use(express.json())
app.use(cors())



app.post("/register", async (req, res) => {
    let user = new User(req.body)
    let result = await user.save()
    result=result.toObject();
    delete result.password;
    res.send(result)
})

app.post('/login', async (req, res) => {
    console.log(req.body)
    if (req.body.password && req.body.email) {
        let user = await User.findOne(req.body).select("-password")
        if (user) {

            res.send(user)
        } else {
            res.send({ res: "no USer Found" })
        }
    }
    else {
        res.send({ res: "no USer Found" })
    }

})

var __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/client/build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/client/build/index.html'))
);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});