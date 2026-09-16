const api = 'http://localhost:8000/api';

export async function get(route) {
  return await fetch(`${api}${route}`);
}

export async function post(route, data) {
  return await fetch(`${api}${route}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
}
