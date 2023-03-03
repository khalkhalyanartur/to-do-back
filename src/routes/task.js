const express = require("express");
const router = express.Router();
const { validationText } = require('../middlwares/task-validation');
const { 
  getAllTasks,
  createOneTask,
  deleteTask,
  deleteAllTasks,
  editTextTask,
  editIsCheckTask
} = require('../controllers/task-controllers');

router.get('/tasks', getAllTasks);
router.delete('/tasks', deleteAllTasks);
router.post('/tasks', validationText, createOneTask);
router.delete('/tasks/:id', deleteTask);
router.patch('/tasks/text/:id', validationText, editTextTask);
router.patch('/tasks/status/:id', editIsCheckTask);
module.exports = router;