const mongoose = require("mongoose");
async function connectToDatabase() {
    try{
      await mongoose.connect('mongodb+srv://Back-end:1xKRC1f5xM16QsVp@back-end.hrjnlkk.mongodb.net/?retryWrites=true&w=majority&appName=Back-end');
      console.log('Connected successfully to DB');
    }
    catch (error){
      console.error('Connection error:', error);
    }
}
connectToDatabase();