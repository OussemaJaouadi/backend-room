const mongoose = require("mongoose")
var teams = new mongoose.Schema(
    {
    members : [String],
    startTime : {
		type: Date,
		default: Date.now,
		required: 'Must have start date - default value is the created date'
    }}
)
var teamsDB = mongoose.model("teams",teams)
module.exports = teamsDB;