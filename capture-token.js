// Захват токена из URL (для standalone PWA)
(function() {
  const params = new URLSearchParams(window.location.search);
  const token = params.get('token');
  if (token) {
    // Сохраняем токен для последующих запросов
    localStorage.setItem('auth_token', token);
    // Убираем токен из адресной строки (без перезагрузки)
    window.history.replaceState({}, document.title, window.location.pathname);
  }
})();