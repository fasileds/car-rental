const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
app.use(cors());
function connectDB() {
  mongoose.connect(
    "mongodb+srv://yabusha:yabusha@cluster0.bov12er.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    { useUnifiedTopology: true, useNewUrlParser: true }
  );

  const connection = mongoose.connection;

  connection.on("connected", () => {
    console.log("Mongo DB Connection Successfull");
  });

  connection.on("error", () => {
    console.log("Mongo DB Connection Error");
  });
}

connectDB();

module.exports = mongoose;
