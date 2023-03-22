//api
const urlApiAE = "https://mindhub-xj03.onrender.com/api/amazing";

let allEvents = [];

async function getEvents() {
  try {
    let response = await fetch(urlApiAE);
    let data = await response.json();

    allEvents = data;

    let arrayEvents = allEvents.events;
    let events = arrayEvents[eventId - 1];

    createEventDetails(events);
  } catch (e) {
    console.log(e);
  }
}

getEvents();

//render details
const querySrt = location.search;
const paramtrs = new URLSearchParams(querySrt);
const eventId = paramtrs.get("id");

const cardsContainer = document.getElementById("main-details");

function createEventDetails(evnt) {
  cardsContainer.innerHTML = `
      <div class="cards-container card-details">
        <div class="card card-img">
          <img
            class="img-details"
            src="${evnt.image}"
            alt="${evnt.image}"
          />
        </div>
        <div class="card card-body card-body-details">
          <h2 class="card-title">${evnt.name}</h2>
          <p id="card-text-description"> 
          ${evnt.description}
          </p>
          <p class="card-text">
          Place: ${evnt.place}
          </p>
          <p class="card-text">
          Capacity: ${evnt.capacity}
          </p>
          <p class="card-text">
          Assistance or estimate: ${evnt.assistance}
          </p>
          <p class="card-text">
          Price: $${evnt.price}
          </p>
        </div>
      </div>

        `;
}
