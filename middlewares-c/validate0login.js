const validation=(req,res,next)=>{
    const {username,password}=req.body
    if(!username||!password)
    {
         return res.status(400).send("Username and password are required");
    }
    if(password.length<6)
    {
        return res.status(400).send("Password must be at least 6 characters")
    }
    next()

}
module.exports=validation