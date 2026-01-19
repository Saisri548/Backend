const authMiddleware=(req,res,next)=>{
    const isLoggedin=false
    if(!isLoggedin){
        return res.status(401).send("Access denied")
    }
    next()
}
module.exports=authMiddleware