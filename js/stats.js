setTimeout(() => {
  //variables
  //const eventStdtcsTab = document.getElementById("eventStadisticsTab");

  const top1 = document.getElementById("top1");
  const top2 = document.getElementById("top2");
  const top3 = document.getElementById("top3");

  const bttn1 = document.getElementById("bttn1");
  const bttn2 = document.getElementById("bttn2");
  const bttn3 = document.getElementById("bttn3");

  const lrg1 = document.getElementById("lrg1");
  const lrg2 = document.getElementById("lrg2");
  const lrg3 = document.getElementById("lrg3");

  const upcEventTab = document.getElementById("upcEventsTab");

  const pastEventTab = document.getElementById("pastEventsTab");

  const arrayEvents = allEvents.events;

  const getCurrentDate = allEvents.currentDate;

  let pastEvents = [];
  let upcomingEvents = [];

  for (const event of arrayEvents) {
    if (getCurrentDate > event.date) {
      pastEvents.push(event);
    } else {
      upcomingEvents.push(event);
    }
  }

  //functions
  //
  //filter for events
  function filterEventsPerformance(arrayEv) {
    let performance = [];

    arrayEv.forEach((element) => {
      let perform = {};
      perform.id = element._id;
      perform.name = element.name;
      perform.assistance = element.assistance;
      perform.capacity = element.capacity;
      perform.category = element.category;
      perform.percentage = (100 * element.assistance) / element.capacity;
      perform.price = element.price;
      performance.push(perform);
    });
    return performance;
  }

  //sort of top events
  const allEventsPerformance = filterEventsPerformance(pastEvents).sort(
    (perf1, perf2) => {
      if (perf1.percentage < perf2.percentage) return 1;
      if (perf1.percentage > perf2.percentage) return -1;
      return 0;
    }
  );

  //create table content
  //
  //highest percetage
  top1.innerText = `${allEventsPerformance[0].name} ${Number.parseFloat(
    allEventsPerformance[0].percentage
  ).toFixed(2)}%`;
  top2.innerText = `${allEventsPerformance[1].name} ${Number.parseFloat(
    allEventsPerformance[1].percentage
  ).toFixed(2)}%`;
  top3.innerText = `${allEventsPerformance[2].name} ${Number.parseFloat(
    allEventsPerformance[2].percentage
  ).toFixed(2)}%`;

  //botton percetage
  const bottonPerformace = allEventsPerformance.slice().reverse();

  bttn1.innerText = `${bottonPerformace[0].name} ${Number.parseFloat(
    bottonPerformace[0].percentage
  ).toFixed(2)}%`;
  bttn2.innerText = `${bottonPerformace[1].name} ${Number.parseFloat(
    bottonPerformace[1].percentage
  ).toFixed(2)}%`;
  bttn3.innerText = `${bottonPerformace[2].name} ${Number.parseFloat(
    bottonPerformace[2].percentage
  ).toFixed(2)}%`;

  //larger capacity
  const capacityPerformance = allEventsPerformance
    .slice()
    .sort((perf1, perf2) => {
      if (perf1.capacity < perf2.capacity) return 1;
      if (perf1.capacity > perf2.capacity) return -1;
      return 0;
    });

  lrg1.innerText = `${capacityPerformance[0].name} ${Number.parseInt(
    capacityPerformance[0].capacity
  )}`;
  lrg2.innerText = `${capacityPerformance[1].name} ${Number.parseInt(
    capacityPerformance[1].capacity
  )}`;
  lrg3.innerText = `${capacityPerformance[2].name} ${Number.parseInt(
    capacityPerformance[2].capacity
  )}`;

  //sort of upcoming events
  //definir por categorias
  //la función se encarga del filtro
  //possible for each
  //must sum the cost of categories
  let upcomingEventsPerformance = [];
  let pastEventsPerformance = [];

  function categoriesPerformance(arrEv) {
    categories.forEach((cat) => {
      let revenue = 0;
      let assitanceAttend = 0;
      let estimateAttend = 0;
      let capacity = 0;

      for (let i = 0; i < arrEv.length; i++) {
        if (arrEv[i].category === cat) {
          revenue += arrEv[i].price * arrEv[i].assistance;
          //check if use assitance or estimate in revenue
          capacity += arrEv[i].capacity;
          if (assitanceAttend === undefined) {
            estimateAttend += arrEv[i].estimate;
          } else if (estimateAttend === undefined) {
            assitanceAttend += arrEv[i].assistance;
          }
        }
      }
    });
  }

  //sort of past events
}, 1500);
