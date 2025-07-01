import mongoose from "mongoose"

const url = "mongodb://localhost:0.0.027017/expressDB"

const database = async () =>{
    try {
        const dbConnect = await mongoose.connect(url)
    
        console.log(`Server is connected on ${dbConnect.connection.host}`);
    } catch (error) {
        console.log(error);
    }
    
}

export default database