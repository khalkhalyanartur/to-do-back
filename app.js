const express = require("express");
const mongoose = require("mongoose");
const apiRoutes = require("./src/routes/task");
const app = express();
const PORT=8000;
const DB_CONNECTION = "mongodb+srv://my_db:qwer1234@cluster0.j9mw9eh.mongodb.net/test";

app.use(express.json());
app.use('/', apiRoutes);



const loadApp = async () => {
  try {
    await mongoose.connect(DB_CONNECTION, {
      useNewUrlParser: true, 
      useUnifiedTopology: true,
    });
    
    app.listen(PORT, () => {
      console.log("Example app listening on port 8000");
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}


loadApp(); 









/*
app.get('/', async (req, res) => {
  try {
    const allTasks = await Task.find();


    res.status(200).send(allTasks);
  } catch (error) {
    res.status(400).send("Failed to find tasks!");
  }
});

*/


/* !!! POST EXAMPLE

app.post('/task', async (req, res) => {
  try {
    const newTask = await new Task({ 
      text: "Задача 1"
     });
    const task = await newTask.save();


    res.status(200).send(task);
  } catch (error) {
    res.status(400).send("Failed to create task!");
  }
});

*/




