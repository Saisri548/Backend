const loggerMiddleware=(req,res,next)=>{
    console.log("----------")
    console.log("method",req.method)
    console.log("URL",req.url)
    console.log("Date",new Date().toLocaleString())
    console.log("------------")
    next()
}
module.exports = loggerMiddleware;