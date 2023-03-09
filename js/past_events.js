// cards creator
const cardsContainer = document.getElementById("cardsCont");

const noResultsMssg = document.getElementById("no-results");

let arrayEvents = allEvents.events;

let getCurrenDate = allEvents.currentDate;

// functions

function addCards(eventCompositor) {
  let eventsCards = "";
  for (const event of eventCompositor) {
    if (getCurrenDate > event.date) {
      eventsCards += `
        <div class="card">
          <img class="card-img-top" src="${event.image}" alt="${event.image}">

          <div class="card-body">
            <h5 class="card-title">${event.name}</h5>

            <p class="card-text">${event.description}</p>

            <div class="cardFooter">
              <p>$${event.price}</p>

              <a href="../pages/details.html?id=${event._id}" class="btn btn-success">View More...</a>
            </div>
          </div>
        </div>

        `;
    }
  }
  return eventsCards;
}

let cards = addCards(arrayEvents);

function paintCards() {
  cardsContainer.innerHTML = cards;
}

//categories
const catCont = document.getElementById("catCont");

function createCat(catCompositor) {
  let catEvent = "";
  for (const cat of catCompositor) {
    catEvent += `
          <label>
            <input
              type="checkbox"
              name="pe-checkbox"
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
    cards = [];
    createCheckedEvents();
  }
});

checkBxCont.addEventListener("click", (e) => {
  if (!e.target.checked && checkBxCategories.length === 0) {
    cards = addCards(arrayEvents);
    paintCards();
  }
});

let filtredEvents = [];

function checkBxCompositor(list, events) {
  let checkedEvents = [];

  for (const e of events) {
    if (list.includes(e.category)) {
      checkedEvents.push(e);
    }
  }
  return checkedEvents;
}

function createCheckedEvents() {
  if (checkBxCategories.length != 0) {
    cards = addCards(checkBxCompositor(checkBxCategories, arrayEvents));
    paintCards();
  }
}

//search filter
const srchInpt = document.getElementById("search");

function checkBxFilter(list, events) {
  let inputFilter = [];

  for (const e of events) {
    if (e.name.toLowerCase().includes(list)) {
      inputFilter.push(e);
    }
  }
  return inputFilter;
}

srchInpt.addEventListener("keyup", () => {
  cards = addCards(checkBxFilter(srchInpt.value.toLowerCase(), arrayEvents));
  paintCards();
});

//input button
function filtrInptCrdsBttn() {
  cards = addCards(checkBxFilter(srchInpt.value.toLowerCase(), arrayEvents));
  paintCards();
}

//calling functions
paintCards();
