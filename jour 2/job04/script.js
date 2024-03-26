const textarea = document.getElementById('keylogger');

window.addEventListener('keydown', (event) => {
  if (/[a-z]/i.test(event.key)) {
    if (document.activeElement === textarea) {
      textarea.value += event.key + event.key;
    } else {
      textarea.value += event.key;
    }
  }
});