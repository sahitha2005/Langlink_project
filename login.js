document.getElementById("loginForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const name = document.getElementById("username").value.trim();
  const language = document.getElementById("language").value;

  if (name && language) {
    // Send data to backend API
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: name, language: language })
      });

      if (response.ok) {
        alert("User saved successfully!");
        window.location.href = "wordofday.html";
      } else {
        alert("Failed to save user.");
      }
    } catch (error) {
      console.error('Error:', error);
      alert("Server error.");
    }
  } else {
    alert("Please enter your name and select a language.");
  }
});
