const {
  getTasks, 
  createTask,
  deleteOneTask,
  deleteTasks,
  editOneTask,
  changeIsCheckOneTask  
} = require("../services/task-services");

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteInfo = await deleteOneTask(id);

    res.status(200).send(deleteInfo);
  } catch (error) {
    res.status(400).send("Failed to delete");
  }
}

const deleteAllTasks = async (req, res) => {
  try {
    const deleteInfo = await deleteTasks();

    res.status(200).send(deleteInfo);
  } catch (error) {
    res.status(400).send("Failed to delete all tasks");
  }
}

const getAllTasks = async (req, res) => {
  try {
    const tasks = await getTasks();

    res.status(200).send(tasks);
  } catch (error) {
    res.status(400).send("Failed to get tasks");
  }
};

const createOneTask = async (req, res) => {
  try {
    const { text } = req.body;

    const task = await createTask(text);
    res.status(200).send(task);
  } catch (error) {
    res.status(400).send("Failed to create tasks");
  }
};

const editTextTask = async (req, res) => {
  try {
    const id = req.params.id;
    const text = req.body.text;

    const updatedTask = await editOneTask(id, text);
    res.status(200).send(updatedTask);
  } catch (error) {
    res.status(400).send("Failed to edit text");
  }
}

const changeisCheckTask = async (req, res) => {
  try {
    const { id }   = req.params;
    const { isCheck } = req.body;
    const updatedTask = await changeIsCheckOneTask(id, isCheck);

    res.status(200).send(updatedTask);
  } catch (error) {
    res.status(400).send("Failed to edit status");
  }
}

module.exports = {
  getAllTasks,
  createOneTask,
  deleteTask,
  deleteAllTasks,
  editTextTask,
  changeisCheckTask
}