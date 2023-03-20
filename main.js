//api

const urlApiAE = "https://mindhub-xj03.onrender.com/api/amazing";

let allEvents = [];
let categories = [];

async function getEvents() {
  try {
    let response = await fetch(urlApiAE);
    let data = await response.json();
    allEvents = data;

    for (const cat of allEvents.events) {
      if (!categories.includes(cat.category)) categories.push(cat.category);
    }
  } catch (e) {
    console.log(e);
  }
}

getEvents();
