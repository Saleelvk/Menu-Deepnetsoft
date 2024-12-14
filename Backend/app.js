const express = require("express");
const cors = require("cors");
const connectDB = require("./db/db");
const morgan = require("morgan");
require("dotenv").config();   
const app = express();     
const mainRouter = require("./routes/main");
const PORT = process.env.PORT || 3001;

// Middlewares 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/api/v1",mainRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
});


