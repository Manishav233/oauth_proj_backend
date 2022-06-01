const express=require("express");
const passport = require('passport');
const cookieSession=require('cookie-session');
const cors = require("cors");
const passportSetup = require("./passport");  //importing passport.js file
const authRoute = require("./routes/auth");
var session = require('express-session')

const app=express();

app.use(cookieSession(
{
name:"session",
keys:["movieapp"],
maxAge:24*60*60*100  //1 day
})
);

app.use(passport.initialize());
app.use(passport.session());
app.use(cors({
origin:"http://localhost:3000",  // https://gentle-llama-626164.netlify.app/
methods:"GET,POST,PUT,DELETE",
credentials:true,
}))

app.use("/auth",authRoute)

app.listen("5000",()=>{
console.log("Server is running")})




