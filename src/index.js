const path = require("path")
require("dotenv").config({path:path.resolve(__dirname,"../.env")});

const express = require("express");
const cors = require("cors");
const app = express()

const TeamsService = require("./db");
const connect = require("./connect");



const service = new TeamsService()

//appuse
app.use(express.json());
const corsOptions = {
  origin: "*", // process.env.CLIENT_URL,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
//teams
app.post("/team",async(req,res)=>{
    const body = req.body;
    if (Array.isArray(body)){
        service.addTeam(body)
            .then((data)=>res.send(data))
            .catch((err)=>{
                res.status(500).send(err);
                console.log(err)
        })
    }else{
        res.status(404).send("Empty Data")
    }
});
app.get("/team",async(req,res)=>{
    service.getTeams()
        .then((data) => {
      res.json(data);
    })
        .catch((err) => {
      res.status(500).send(err);
    });
})
//login
app.post("/login",async(req,res)=>{
    const body = req.body;
    try{
        if (body.user == process.env.user && body.password == process.env.password){
        res.status(200).json({"logged":true})
    }else{
        res.status(200).json({"logged":false});
    }}catch(err){
        res.status(500).send(err)
    }
})
//run app
connect().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log('Server is running ...')
    })
})