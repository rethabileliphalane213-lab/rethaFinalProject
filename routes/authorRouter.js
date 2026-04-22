const {Router}=require("express")
const authorRouter=Router()

authorRouter.get("/",(req,res)=>res.send("this is a  Author Request"))
authorRouter.get("/:authorId",(req,res)=>{
    const authorId=req.params.authorId
    res.send(`authorId: ${authorId}`)
})

module.exports=authorRouter