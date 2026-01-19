const express=require("express")
const app=express()
const loggerMiddleware=require("./middlewares-c/loggermiddleware")
const auth=require("./middlewares-c/auth")
const validatelogin=require("./middlewares-c/validate0login")
const errorMiddleware=require("./middlewares-c/errorMiddleware")
app.use(express.json())
app.use(loggerMiddleware)

app.get("/",(req,res)=>{
    res.send("Home Page")
})
app.post("/login",validatelogin,(req,res)=>{
  res.send("Login successful");
})
app.get("/profile",(req,res)=>{
    res.send("Profile")
})
app.get("/error-test",(req,res)=>{
    throw new Error("Test error occurred");
})
app.get("/dashboard",auth,(req,res)=>{
    res.send("Welcome to the dashboard")
})
app.get("/error-test",(req,res)=>{
    res.send("Welcome to the dashboard")
})
app.use(errorMiddleware)


app.listen(3000,()=>{
    console.log("Server running on http://localhost:3000")
})