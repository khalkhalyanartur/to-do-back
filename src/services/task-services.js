const Task = require("../models/task");

const getTasks = async () => {
  const tasks = await Task.find();
  return tasks;
};

const createTask = async (text) => {
  const newTask = new Task({ text });
  const savedTask = await newTask.save();

  return savedTask;
};

const deleteOneTask = async (id) => {
  const deleteInfo = await Task.deleteOne({ '_id' : id });

  return deleteInfo
}

const deleteTasks = async (id) => {
  const deleteInfo = await Task.deleteMany();

  return deleteInfo
}


const editOneTask = async (id, text) => {
  const editInfo = await Task.findByIdAndUpdate(
    { _id: id },
    { text },
    { new: true }
  );
  return editInfo;
}

const changeStatusOneTask = async (id, isCheck) => {
  const editInfo = await Task.findByIdAndUpdate(
    { _id: id },
    { isCheck },
    { new: true }
  );
  return editInfo;
}

module.exports = {
  getTasks,
  createTask,
  deleteOneTask,
  deleteTasks,
  editOneTask,
  changeStatusOneTask
}
