import mongoose from "mongoose"

mongoose.connect("mongodb+srv://admin:senha1234@apinode.59tikos.mongodb.net/")

let db = mongoose.connection;

export default db;