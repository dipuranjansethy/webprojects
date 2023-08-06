const express=require('express');
const app=express();
const path=require('path');
const port=process.env.PORT||4000;
const hbs=require('hbs');

const templatePath=path.join(__dirname,"../templates/views");
const staticPath=path.join(__dirname,"../public");
const partialPaths=path.join(__dirname,"../templates/partials");


app.set("view engine","hbs");
app.set("views",templatePath);
app.use(express.static(staticPath));
hbs.registerPartials(partialPaths);


app.get("/",(req,res)=>{
    res.render("index");
})
app.get("/about",(req,res)=>{
    res.render('about');
})

app.get("/weather",(req,res)=>{
    res.render("weather");
})
app.get("*",(req,res)=>{
    res.render("404error");
})




app.listen(port,()=>{
    console.log(`the port is listening to ${port}`);
})