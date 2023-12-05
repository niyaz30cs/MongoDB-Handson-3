const userCollection = require("../model/userModel")


const findAllUser=async(req,res)=>{
    const data=req.body

    const result=await userCollection.find({},data)
    return res.send({result:result})
}

const findSalary=async(req,res)=>{
    const data=req.body
    const result=await userCollection.find({salary:{$gt:"30000"}},data)
    return res.send({result:result})
}

const findExperience=async(req,res)=>{
    const data=req.body
    const result=await userCollection.find({overallExp:{$gt:"2"}},data)
    return res.send({result:result})
}

const findYear=async(req,res)=>{
    const data=req.body
    const result=await userCollection.find({yearGrad:{$gt:"2015"},overallExp:{$gt:"1"}},data)
    return res.send({result:result})
}

const updataSalary=async(req,res)=>{
    const data=req.body
    const result=await userCollection.updataMany({slary:{$gt:"70000"}},{$set:{salary:"65000"}},data)
    return res.send({result:result})
}

const deleteDetails=async(req,res)=>{
    const data=req.body
    const result=await userCollection.deleteMany({lastCompany:"Y"},data)
    return res.send({result:result})
}

module.exports={
    findAllUser,
    findSalary,
    findExperience,
    findYear,
    updataSalary,
    deleteDetails
}
