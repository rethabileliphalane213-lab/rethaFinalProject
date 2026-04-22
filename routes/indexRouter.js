const {Router}=require("express")
const indexRouter=Router()

indexRouter.get("/",(req,res)=>{
    res.send("this is a IndexRouter")
})

indexRouter.get("/:index",(req,res)=>{
    const index=req.params.index
    res.send(`IndexRouter: ${index}`)
})

module.exports=indexRouter