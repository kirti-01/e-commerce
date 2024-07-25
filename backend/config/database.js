
const mongoose = require('mongoose');

const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Remove the useCreateIndex option
      // useCreateIndex: true, // Remove this line
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = connectDatabase;


/*const mongoose=require("mongoose");

const connectDatabase=()=>
{
mongoose.connect(process.env.DB_URI,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true}).then((data)=>
{
    console.log(`Mongodb connected with server: ${data.connection.host}`);
}).catch((err)=>{
    console.log(err)
})
}
module.exports=connectDatabase;*/