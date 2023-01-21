const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const API_KEY = "ustdISYO/49ijrHGynwoRA==q496CmuRPK7RcVKd";

const option = {
  method: "GET",
  headers: {
    "X-Api-Key": API_KEY,
  },
};
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
  try {
    jokeEl.innerText = "Updating...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";
    const res = await fetch(apiURL, option);
    const data = await res.json();
    btnEl.disabled = false;
    btnEl.innerText = "Tell me A Joke";
    jokeEl.innerText = data[0].joke;
  } catch (error) {
    jokeEl.innerHTML = "An Error Happened , try Again Later";
    btnEl.disabled = false;
    btnEl.innerText = "Tell me A Joke";
  }
}

btnEl.addEventListener("click", getJoke);
