document.getElementById('userForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const language = document.getElementById('language').value;

  if (name && language) {
    localStorage.setItem("username", name);
    localStorage.setItem("language", language);

    document.getElementById('username').textContent = name;
    document.getElementById('userlang').textContent = language.toUpperCase();

    document.getElementById('output').classList.remove('hidden');
    document.getElementById('startBtn').classList.remove('hidden');
    this.classList.add('hidden');
  } else {
    alert('Please fill in all fields.');
  }
});

document.getElementById('startBtn').addEventListener('click', function () {
  window.location.href = "words.html";
});
