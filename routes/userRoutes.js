const express=require("express")
const router =express.Router()
const auth=require("../middlewares/auth")
let users=[
    {id: 1, name: "Saisri"},
    {id: 2, name: "Priya"}
]
router.get("/",(req,res)=>{
    res.json(users)
})
router.get("/:id",auth,(req,res)=>{
    const user=users.find(u=>u.id===parseInt(req.params.id))
    if(!user) return res.status(400).send("user not found")
    res.json(user)    

})
router.post("/",(req,res)=>{
    const {id,name}=req.body
    if(!id ||!name) return res.status(400).send("Both username and Id are requried")
    users.push({id,name})    
    res.status(401).send("User created")

})
module.exports=router