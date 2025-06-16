document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('nameForm');
  const usernameInput = document.getElementById('username');
  const customMessage = document.getElementById('customMessage');
  const startForm = document.getElementById('startForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = usernameInput.value.trim();

    if (username !== '') {
      const formattedName = username.charAt(0).toUpperCase() + username.slice(1).toLowerCase();
      customMessage.textContent = `${formattedName}, es-tu prêt à calculer ta moyenne d’orientation ?`;
      customMessage.style.display = 'block';
      startForm.style.display = 'block';
      form.style.display = 'none';
    }
  });
});