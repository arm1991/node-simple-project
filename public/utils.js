export function displayError(spanId, message) {
  const span = document.getElementById(spanId);

  if (message) {
    span.style.display = 'block';
    span.textContent = message;
  }
}

export function clearError(spanId) {
  const span = document.getElementById(spanId);
  span.style.display = 'none';
}
