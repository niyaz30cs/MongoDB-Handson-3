const { findAllUser, findSalary, findExperience, findYear, updataSalary, deleteDetails } = require("../controller/userController");

const userRouter=require("express").Router();

userRouter.post("/findAllUser",findAllUser)
userRouter.post("/findSalary",findSalary)
userRouter.post("/findExperience",findExperience)
userRouter.post("/findYear",findYear)
userRouter.post("/updataSalary",updataSalary)
userRouter.post("/deleteDetails",deleteDetails)

module.exports=userRouter;