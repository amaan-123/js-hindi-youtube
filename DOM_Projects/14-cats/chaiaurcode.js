const url = "https://api.thecatapi.com/v1/images/search";

const btn = document.querySelector(".btn");
const container = document.querySelector(".container");

btn.addEventListener("click", async () => {
  btn.disabled = true;
  btn.textContent = "Loading...";
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (data && data[0] && data[0].url) {
      container.innerHTML = `<div class="cats"><img src="${data[0].url}" alt="Random Cat" class="random_cats"></div>`;
    } else {
      container.innerHTML =
        '<p style="color:white;">No cat found. Try again!</p>';
    }
  } catch (err) {
    container.innerHTML =
      '<p style="color:white;">Failed to fetch cat image.</p>';
  }
  btn.disabled = false;
  btn.textContent = "Get Random Cat";
});
