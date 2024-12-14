const mongoose = require('mongoose');
const connectDB= async ()=>{
        try {
            await mongoose.connect(process.env.MONGO_URL)
            console.log("mongoDb is connected")
            
        } catch (error) {
            console.log("Error in mogodb connections",error)
        }
 
} 

module.exports= connectDB;
