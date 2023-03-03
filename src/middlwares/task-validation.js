const { check } = require('express-validator');
const { validatorResult } = require('./validation-result')
const validationText = [
  check('text') // проверяем поле "text"
  .isString() // проверяем тип данных, которые приходят
  .trim() // удаляем пробелы с начала и конца строки
  .notEmpty(), // проверяем пустое ли поле
  validatorResult
];

module.exports = {
  validationText
};
