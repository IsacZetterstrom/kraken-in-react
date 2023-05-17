import mongoose from "mongoose";

const connectToDB = async () => {
  const url = `mongodb+srv://${process.env.mongoDB_username}:${process.env.mongoDB_password}@cluster0.kogslvb.mongodb.net/?retryWrites=true&w=majority`;
  await mongoose.connect(url);
  console.log("Serverconnection established");
};

export default connectToDB;
