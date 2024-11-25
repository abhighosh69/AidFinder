import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Set mongoose event listeners
    mongoose.connection.on("connected", () => {
      console.log("Database connected successfully");
    });
    // for error
    mongoose.connection.on("error", (err) => {
      console.error(`Database connection error: ${err}`);
    });
    // disconnect
    mongoose.connection.on("disconnected", () => {
      console.log("Database disconnected");
    });

    // Connect to the MongoDB database
    await mongoose.connect(`${process.env.MONGODB_URI}`);
  } catch (error) {
    console.error(`Failed to connect to the database: ${error.message}`);
    process.exit(1); // Exit the process if the database connection fails
  }
};

export default connectDB;
