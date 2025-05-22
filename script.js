function sendMessage() {
  const userInput = document.getElementById("userInput");
  const chatBox = document.getElementById("chatBox");

  const message = userInput.value;
  if (!message) return;

  // Tampilkan pesan pengguna
  chatBox.innerHTML += `<div><strong>Kamu:</strong> ${message}</div>`;

  // Simulasi balasan ChatGPT
  let botResponse = "Saya belum paham itu.";
  if (message.toLowerCase().includes("halo")) {
    botResponse = "Hai juga! Ada yang bisa saya bantu?";
  } else if (message.toLowerCase().includes("siapa kamu")) {
    botResponse = "Saya chatbot buatan kamu 😊";
  }

  // Tampilkan balasan
  setTimeout(() => {
    chatBox.innerHTML += `<div><strong>Bot:</strong> ${botResponse}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 500);

  userInput.value = "";
}
