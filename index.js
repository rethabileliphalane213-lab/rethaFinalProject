const open=require("open")

function takeToWeb(url){
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
open(newUrl)

}
takeToWeb("localhost:8080/contact-me")