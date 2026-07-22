document.addEventListener('DOMContentLoaded', () => {
  const passwordInput = document.getElementById('password');
  const togglePasswordBtn = document.getElementById('togglePassword');
  const eyeIcon = document.getElementById('eyeIcon');
  const registerForm = document.getElementById('registerForm');

  // Иконки глаза
  const eyeOpenSVG = `
    <path d="2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  `;

  const eyeClosedSVG = `
    <path d="9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
    <path d="M6.61 6.61A13.52 13.52 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
    <line x1="2" x2="22" y1="2" y2="22"></line>
  `;

  // Показать / Скрыть пароль
  togglePasswordBtn.addEventListener('click', () => {
    const isPassword = passwordInput.getAttribute('type') === 'password';
    passwordInput.setAttribute('type', isPassword ? 'text' : 'password');
    eyeIcon.innerHTML = isPassword ? eyeClosedSVG : eyeOpenSVG;
  });

  // Симуляция отправки формы регистрации
  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;

    alert(`Спасибо за регистрацию, ${name}! На адрес ${email} отправлено письмо с подтверждением.`);
    registerForm.reset();
  });
});