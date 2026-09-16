import { get, post } from './api.js';
import { displayError } from './utils.js';

export async function getAllUsers() {
  try {
    const res = await get('/users');
    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || 'Something went wrong');
    }

    console.table(data);
  } catch (error) {
    console.error('Error fetching users:', error);
  }
}

export async function getAllExercises() {
  try {
    const res = await get('/exercises');
    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || 'Something went wrong');
    }

    console.table(data);
  } catch (error) {
    console.error('Error fetching exercises:', error);
  }
}

export async function createUser() {
  try {
    const res = await post('/users', { username: document.getElementById('username').value });
    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || 'Something went wrong');
    }

    console.log(data);
  } catch (error) {
    displayError('usernameError', error.message);

    console.error(error);
  }
}

export async function createExercise() {
  try {
    // const id = parseInt(document.getElementById('userId').value)
    const res = await post(`/exercises`, {
      description: document.getElementById('description').value,
      userId: parseInt(document.getElementById('userId').value),
      duration: parseInt(document.getElementById('duration').value),
      date: document.getElementById('date').value,
    });
    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || 'Something went wrong');
    }

    console.log(data);
  } catch (error) {
    displayError('exerciseError', error.message);

    console.error(error);
  }
}
