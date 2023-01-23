const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const {Schema} = mongoose
dotenv.config();

const courseSchema = new Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    img:{type:String,required:true},
})
const expertSchema= new Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    img:{type:String,required:true},
})

const Courses  = mongoose.model('courses',courseSchema);
const Expert  = mongoose.model('experts',expertSchema);

app.use(cors())
app.use(bodyParser.json())

//// GET ALL DATA 
 app.get('/courses',(req,res)=>{
    Courses.find({},(err,doc)=>{
        if(!err){
            res.send(doc)
        }else{
            res.status(500).json({message:err})
        }
    })
 })
 app.get('/experts',(req,res)=>{
    Expert.find({},(err,doc)=>{
        if(!err){
            res.send(doc)
        }else{
            res.status(500).json({message:err})
        }
    })
 })

 /// GET BY ID
 app.get('/courses/:id',(req,res)=>{
    const {id}=req.params
    Courses.findById(id,(err,doc)=>{
        if(!err){
            if(doc){
                res.send(doc)
            }else{
                res.status(404).json({message:'Not Found!'})
            }
        }else{
            res.status(500).json({message:err})
        }
    })
 })

/// DELETE 

app.delete('/courses/:_id',(req,res)=>{
    const {_id}=req.params;
    
    Courses.findByIdAndDelete(_id,(err,doc)=>{
        if(!err){
            res.send(doc)
        }else{
            res.status(500).json({message:err})
        }
    })
})


///POST

app.post('/courses',(req,res)=>{
    let course = new Courses({
        title:req.body.title,
        description:req.body.description,
        price:req.body.price,
        img:req.body.img,
    })
    course.save()
    res.send({message:'success...'})
})






const PORT = process.env;
const DB = process.env.DB_URL.replace("<password>",process.env.PASSWORD)

mongoose.connect(DB,(err)=>{
    if(!err){
        console.log('Db connected')
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))

    }
})

