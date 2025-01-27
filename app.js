// app.js
document.getElementById("sendBtn").addEventListener("click", handleUserInput);

function handleUserInput() {
  const userInput = document.getElementById("userInput").value;
  const conversation = document.getElementById("conversation");

  // Add user input to conversation
  const userMessage = document.createElement("p");
  userMessage.textContent = `You: ${userInput}`;
  conversation.appendChild(userMessage);

  // Process the input
  const response = generateResponse(userInput);

  // Add assistant's response to conversation
  const champResponse = document.createElement("p");
  champResponse.textContent = `Champ: ${response}`;
  conversation.appendChild(champResponse);

  // Clear input field
  document.getElementById("userInput").value = "";
}

function generateResponse(input) {
  input = input.toLowerCase();
  if (input.includes("hello")) {
    return "Hello! How can I assist you today?";
  } else if (input.includes("time")) {
    return `The current time is ${new Date().toLocaleTimeString()}`;
  } else if (input.includes("weather")) {
    return "I can't fetch weather yet, but I'm learning!";
  } else if (input.includes("bye")) {
    return "Goodbye! Have a great day!";
  } else {
    return "I'm not sure how to respond to that yet.";
  }
}

async function getWeather(city) {
    const apiKey = "YOUR_API_KEY";
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    );
    const data = await response.json();
    return `The weather in ${city} is ${data.weather[0].description} with a temperature of ${Math.round(data.main.temp - 273.15)}°C.`;
  }
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.onresult = (event) => {
    const userSpeech = event.results[0][0].transcript;
    document.getElementById("userInput").value = userSpeech;
    handleUserInput();
  };
  
  function startListening() {
    recognition.start();
  }

  // Check if SpeechRecognition is available in the browser
const SpeechRecognition =
window.SpeechRecognition || window.webkitSpeechRecognition;

if (!SpeechRecognition) {
alert("Sorry, your browser does not support Speech Recognition!");
} else {
const recognition = new SpeechRecognition();

// Configure the recognition
recognition.lang = "en-US"; // Language
recognition.interimResults = false; // Disable partial results
recognition.maxAlternatives = 1; // Limit to one best result

const micBtn = document.getElementById("micBtn");
micBtn.addEventListener("click", () => {
  recognition.start(); // Start voice recognition
  micBtn.textContent = "🎙️ Listening...";
});

recognition.onresult = (event) => {
  const userSpeech = event.results[0][0].transcript; // Get the user's speech
  document.getElementById("userInput").value = userSpeech; // Display speech in input box
  handleUserInput(); // Process the input
  micBtn.textContent = "🎤"; // Reset button
};

recognition.onerror = (event) => {
  console.error("Speech Recognition Error: ", event.error);
  alert("Sorry, I couldn't understand you. Please try again!");
  micBtn.textContent = "🎤"; // Reset button
};

recognition.onend = () => {
  micBtn.textContent = "🎤"; // Reset button after recognition ends
};
}

// Existing handleUserInput and generateResponse functions
document.getElementById("sendBtn").addEventListener("click", handleUserInput);

function handleUserInput() {
const userInput = document.getElementById("userInput").value;
const conversation = document.getElementById("conversation");

// Add user input to conversation
const userMessage = document.createElement("p");
userMessage.textContent = `You: ${userInput}`;
conversation.appendChild(userMessage);

// Process the input
const response = generateResponse(userInput);

// Add assistant's response to conversation
const champResponse = document.createElement("p");
champResponse.textContent = `Champ: ${response}`;
conversation.appendChild(champResponse);

// Clear input field
document.getElementById("userInput").value = "";
}

function generateResponse(input) {
input = input.toLowerCase();
if (input.includes("hello")) {
  return "Hello! How can I assist you today?";
} else if (input.includes("time")) {
  return `The current time is ${new Date().toLocaleTimeString()}`;
} else if (input.includes("weather")) {
  return "I can't fetch weather yet, but I'm learning!";
} else if (input.includes("bye")) {
  return "Goodbye! Have a great day!";
} else {
  return "I'm not sure how to respond to that yet.";
}
}

function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US"; // Language
    speechSynthesis.speak(utterance);
  }
  
  // Modify handleUserInput to speak responses
  function handleUserInput() {
    const userInput = document.getElementById("userInput").value;
    const conversation = document.getElementById("conversation");
  
    const userMessage = document.createElement("p");
    userMessage.textContent = `You: ${userInput}`;
    conversation.appendChild(userMessage);
  
    const response = generateResponse(userInput);
  
    const champResponse = document.createElement("p");
    champResponse.textContent = `Champ: ${response}`;
    conversation.appendChild(champResponse);
  
    speak(response); // Speak the response
    document.getElementById("userInput").value = "";
  }

  
  