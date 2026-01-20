const auth=(req,res,next)=>{
    let token=req.query.token;
    if(token==="123"){
        next()
    }
    else{
        res.status(401).send("Unauthorized: Invalid token");
    }
}
module.exports=auth