import mongoose from "mongoose";

mongoose.connect("mongodb+srv://alura:alura@curso-alura.fgja107.mongodb.net/alura-node");

const db = mongoose.connection;

export default db;