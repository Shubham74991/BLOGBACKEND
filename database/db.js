import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-i4xzraa-shard-00-00.ufgol01.mongodb.net:27017,ac-i4xzraa-shard-00-01.ufgol01.mongodb.net:27017,ac-i4xzraa-shard-00-02.ufgol01.mongodb.net:27017/?ssl=true&replicaSet=atlas-uinx47-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL,{ useNewUrlParser: true})
        console.log("connected") ;
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;