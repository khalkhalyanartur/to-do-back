const express = require("express");
const router = express.Router();
const { 
  getAllTasks,
  createOneTask,
  deleteTask,
  deleteAllTasks,
  editTextTask,
  changeStatusTask
} = require('../controllers/task-controllers');

router.get('/tasks', getAllTasks);
router.delete('/tasks', deleteAllTasks);
router.post('/tasks', createOneTask);
router.delete('/tasks/:id', deleteTask);
router.patch('/tasks/text/:id', editTextTask);
router.patch('/tasks/status/:id', changeStatusTask);
module.exports = router;