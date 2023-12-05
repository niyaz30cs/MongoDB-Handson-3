 const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
    firstName: String,
    lastName: String,
    salary:String,
    department: String,
    lastCompany:String,
    lastSalary:String,
    overallExp:String,
    contactInfo:String,
    yearGrad:String,
    gradeStream:String
})

const userCollection = `mongoose.Model("userDetails", ${userModel})`;

module.exports = userCollection