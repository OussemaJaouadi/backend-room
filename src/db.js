const teamsDB = require("./schema")
//building services
class TeamsService{
    addTeam(team){
        return new Promise((resolve,reject)=>{
            let newteam = teamsDB({ members: team, startTime: new Date() })
            newteam.save().then((doc)=>{resolve(doc)}).catch((err)=>{reject(err)})
        })
    }
    getTeams(){
        return new Promise((resolve,reject)=>{
            teamsDB.find({}).sort({startTime :1}).then((data)=>{resolve(data)}).catch((err)=>{reject(err)})
        })
    }
}
module.exports = TeamsService;