import {
  createUser,
  getAllUsers,
  createExercise,
  getAllExercises,
  getUserExercisesLogs,
} from './requests.js';
import { clearError } from './utils.js';

const getAllUsersBtn = document.getElementById('getAllUsers');
const getAllExercisesBtn = document.getElementById('getAllExercises');
const getUserExercisesLogsBtn = document.getElementById('getUserExercisesLogs');
const createUserBtn = document.getElementById('createUser');
const createExerciseBtn = document.getElementById('createExercise');
const forms = document.querySelectorAll('form');

getAllUsersBtn.addEventListener('click', () => {
  getAllUsers();
});

getAllExercisesBtn.addEventListener('click', () => {
  getAllExercises();
});

getUserExercisesLogsBtn.addEventListener('click', () => {
  getUserExercisesLogs();
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
