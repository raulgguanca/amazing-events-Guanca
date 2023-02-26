// variables
const cardsContainer = document.getElementById('cardsCont');

let arrayEvents = allEvents[0].events;

let getCurrenDate = allEvents[0].currentDate;

// functions

function addCards(eventCompositor){
    let eventsCards = '';
    for (const event of eventCompositor) {
        if ( getCurrenDate <= event.date ) {
        eventsCards += `
        <div class="card">
          <img class="card-img-top" src="${event.image}" alt="${event.image}">

          <div class="card-body">
            <h5 class="card-title">${event.name}</h5>

            <p class="card-text">${event.description}</p>

            <div class="cardFooter">
              <p>$${event.price}</p>

              <a href="../pages/details.html" class="btn btn-success">View More...</a>
            </div>
          </div>
        </div>

        `}
    }
    return eventsCards;
}

let cards = addCards(arrayEvents);

cardsContainer.innerHTML = cards;