import mongoose from "mongoose";
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            ssl: true,
            serverSelectionTimeoutMS: 5000,
            connectTimeoutMS: 10000,
        });
        console.log("Ride service connected to MongoDB...");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};
export default connect;
