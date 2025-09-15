const url = "https://api.chucknorris.io/jokes/random";

// --- DOM Setup ---
const jokeDisplay =
  document.getElementById("display-joke") || createJokeDisplay();
const btn = document.querySelector(".btn") || createButton();

function createJokeDisplay() {
  const div = document.createElement("div");
  div.id = "display-joke";
  div.style.marginTop = "30px";
  document.body.appendChild(div);
  return div;
}

function createButton() {
  const button = document.createElement("button");
  button.className = "btn";
  button.textContent = "Get Joke";
  document.body.appendChild(button);
  return button;
}

// --- XMLHttpRequest ---
function getJokeXMLHttpRequest() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      jokeDisplay.textContent = "[XHR] " + data.value;
    }
  };
  xhr.send();
}

// --- Promises (fetch) ---
function getJokePromise() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      jokeDisplay.textContent = "[Promise] " + data.value;
    })
    .catch((err) => {
      jokeDisplay.textContent = "Error: " + err;
    });
}

// --- Race Condition Example ---
function getJokeRaceCondition() {
  // Start two requests, only the fastest will display
  Promise.race([
    fetch(url).then((r) => r.json()),
    fetch(url).then((r) => r.json()),
  ]).then((data) => {
    jokeDisplay.textContent = "[Race] " + data.value;
  });
}

// --- Button Event ---
let mode = 0;
btn.textContent = "Get Joke (XHR)";
btn.onclick = function () {
  if (mode === 0) {
    getJokeXMLHttpRequest();
    btn.textContent = "Get Joke (Promise)";
    mode = 1;
  } else if (mode === 1) {
    getJokePromise();
    btn.textContent = "Get Joke (Race Condition)";
    mode = 2;
  } else {
    getJokeRaceCondition();
    btn.textContent = "Get Joke (XHR)";
    mode = 0;
  }
};
