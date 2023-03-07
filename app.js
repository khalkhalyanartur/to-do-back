const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { PORT,  DB_CONNECTION } = require("./config");
const apiRoutes = require("./src/routes/task");
const app = express();

app.use(express.json());
app.use(cors());
app.use('/', apiRoutes);

const loadApp = async () => {
  try {
    await mongoose.connect(DB_CONNECTION, {
      useNewUrlParser: true, 
      useUnifiedTopology: true,
    });
    
    app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

loadApp(); 