const errorMiddleware=(err,req,res,next)=>{
    console.log("Error Message",err.message)
     res.status(500).json({
    success: false,
    message: err.message || "Internal Server Error"
  });
}
module.exports=errorMiddleware