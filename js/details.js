setTimeout(() => {
  //details render
  const querySrt = location.search;
  const paramtrs = new URLSearchParams(querySrt);
  const eventId = paramtrs.get("id");

  const arrayEvents = allEvents.events;
  const cardsContainer = document.getElementById("main-details");

  let evnt = arrayEvents[eventId - 1];

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
}, 1500);
