import express from "express"
import mongoose from "mongoose"
const url = "mongodb://localhost:27017/"
async function dbconnection() {
    await mongoose.connect(url)
    const shema = mongoose.Schema({
        id: Number,
        name: String,
        age: Number
    })
    const std_model = mongoose.model('student', shema);
    return std_model
}
async function getdata() {
    const student = await dbconnection()
    // await student.insertOne({ id: 3, name: "khanum", age: 63 })
    // await student.updateMany({name:'khanum'},{$set:{id:2}})
    // await student.deleteMany({name:"khanum"}) 
    const a = await student. find()
    console.log(a)
}
getdata()

const app = express()
// import { MongoClient } from "mongodb"

// const url = "mongodb://localhost:27017/"
// const dbname = "College"
// const client = new MongoClient(url)
// const app = express()
// client.connect().then((resolve) => {
//     const db = resolve.db(dbname)
//     const student = db.collection('student')

//     app.get('/',async(req,res)=>{
//         const result = await student.find().toArray()
//         res.send(result)
//     })

//     app.get('/insert',async(req,res)=>{
//         const data = {
//             id: 33,
//             name:"asim",
//             age:70
//         }
//         const response=await student.insertOne(data)
//         console.log(response)
//         res.send('inserted successfully...')
//     })

//     app.get("/update",async(req,res)=>{
//         const response =await student.updateMany({name:"asim"},{$set:{age:20,id:23,name:'saleem'}})
//         console.log(response)
//         res.send('data updated...')
//     })

//     app.get('/delete',async(req,res)=>{
//         const response = await student.deleteMany({name:'saleem'})
//         console.log(response)
//         res.send('deleted all data...')
//     })


// })




app.listen(3000)