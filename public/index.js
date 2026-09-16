import { createUser, getAllUsers, createExercise, getAllExercises } from './requests.js';
import { clearError } from './utils.js';

const getAllUsersBtn = document.getElementById('getAllUsers');
const getAllExercisesBtn = document.getElementById('getAllExercises');
const createUserBtn = document.getElementById('createUser');
const createExerciseBtn = document.getElementById('createExercise');
const forms = document.querySelectorAll('form');

getAllUsersBtn.addEventListener('click', () => {
  getAllUsers();
});

getAllExercisesBtn.addEventListener('click', () => {
  getAllExercises();
});

createUserBtn.addEventListener('click', () => {
  createUser();
  clearError('usernameError');
});

createExerciseBtn.addEventListener('click', () => {
  createExercise();
  clearError('exerciseError');
});

forms.forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
  });
});
