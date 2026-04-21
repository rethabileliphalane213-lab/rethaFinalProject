const open=require("open")
const express=require("express")
const app=express()

/*function takeToWeb(err,url){
    if(err){
        console.error(err)
    }
    let newUrl=""
    if(url === "localhost:8080"){
        newUrl="index.html"
    }else if(url ==="localhost:8080/about"){
        newUrl="about.html"
    }else if(url ==="localhost:8080/contact-me"){
        newUrl="./contact-me.html"
    }else{
        newUrl="404.html"
    }
 open.newUrl

}*/

 const port=process.env.PORT
app.get("/",(req,res)=>{
   
    res.redirect(port)
})

app.listen(port,(err)=>{
    if (err){console.error(err)}
    console.log("I did it")
})
