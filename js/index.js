// variables

const cardsContainer = document.getElementById("cardsCont");

let arrayEvents = allEvents.events;

function addCards(eventCompositor) {
  let eventsCards = "";
  for (const event of eventCompositor) {
    eventsCards += `
        <div class="card">
          <img class="card-img-top" src="${event.image}" alt="${event.image}">

          <div class="card-body">
            <h5 class="card-title">${event.name}</h5>

            <p class="card-text">${event.description}</p>

            <div class="cardFooter">
              <p>$${event.price}</p>

              <a href="./pages/details.html" class="btn btn-success">View More...</a>
            </div>
          </div>
        </div>

        `;
  }
  return eventsCards;
}

let cards = addCards(arrayEvents);

cardsContainer.innerHTML = cards;

//categories
const catCont = document.getElementById("catCont");

function createCat(catCompositor) {
  let catEvent = "";
  for (const cat of catCompositor) {
    catEvent += `
          <label>
            <input
              type="checkbox"
              name="home-checkbox"
              class="checkbox"
              id="${cat}"
              value="${cat}"
            />
            ${cat}
          </label>
    `;
  }
  return catEvent;
}

let category = createCat(categories);

catCont.innerHTML = category;

// categories filters
const checkBxCont = document.getElementById("catCont");

let checkBxCategories = [];

checkBxCont.addEventListener("click", (e) => {
  if (e.target.checked != undefined) {
    if (e.target.checked) {
      checkBxCategories.push(e.target.value);
    } else {
      let index = checkBxCategories.indexOf(e.target.value);
      if (index != -1) {
        checkBxCategories.splice(index, 1);
      }
    }
  }
});

function checkBxFilter(list, event) {
  let listining = [];

  for (const event of e) {
  }
}

//search filter
const srchImpt = document.getElementById("search");

const noResultsMssg = document.getElementById("no-results");
