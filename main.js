//api

const urlApiAE = "https://mindhub-xj03.onrender.com/api/amazing";

let allEvents = [];
let categories = [];

//async function getEvents() {
//try {
//const response = await fetch(urlApiAE);
//let data = await response.json();
//allEvents = data;
//return data;
//} catch (e) {
//console.log(e);
//}
//}

fetch(urlApiAE)
  .then((Response) => Response.json())
  .then((data) => {
    allEvents = data;

    for (const cat of allEvents.events) {
      if (!categories.includes(cat.category)) categories.push(cat.category);
    }
  })
  .catch((e) => {
    console.log(e);
  });
