fetch(urlApiAE)
  .then((Response) => Response.json())
  .then((data) => {
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

    //categories performance generator
    let upcomingEventsPerformance = [];
    let pastEventsPerformance = [];

    function categoriesPerformance(arrEv) {
      categories.forEach((cat) => {
        let revUpcoming = 0;
        let revPast = 0;
        let assitanceAttend = 0;
        let estimateAttend = 0;
        let capacityUpcoming = 0;
        let capacityPast = 0;

        for (let i = 0; i < arrEv.length; i++) {
          if (arrEv[i].category == cat) {
            if (arrEv[i].assistance == undefined) {
              estimateAttend += arrEv[i].estimate;
              revUpcoming += arrEv[i].price * arrEv[i].estimate;
              capacityUpcoming += arrEv[i].capacity;
            } else if (arrEv[i].estimate == undefined) {
              assitanceAttend += arrEv[i].assistance;
              revPast += arrEv[i].price * arrEv[i].assistance;
              capacityPast += arrEv[i].capacity;
            }
          }
        }
        if (arrEv == upcomingEvents) {
          estimateAttend *= 100 / capacityUpcoming;
          if (estimateAttend >= 0) {
            upcomingEventsPerformance.push({
              category: cat,
              revenues: revUpcoming,
              atendance: estimateAttend,
            });
          }
        } else if (arrEv == pastEvents) {
          assitanceAttend *= 100 / capacityPast;
          if (assitanceAttend >= 0) {
            pastEventsPerformance.push({
              category: cat,
              revenues: revPast,
              atendance: assitanceAttend,
            });
          }
        }
      });
    }

    //events stadistic table generator

    function createStadisticsByDate(filterDateEvents) {
      let eventsTab = "";
      for (const i of filterDateEvents) {
        eventsTab += `
                  <tr>
                    <td>${i.category}</td>
                    <td>$${i.revenues}</td>
                    <td>${Number.parseFloat(i.atendance).toFixed(2)}%</td>
                  </tr>
      `;
      }
      return eventsTab;
    }

    //upcomings events table
    categoriesPerformance(upcomingEvents);
    upcEventTab.innerHTML = createStadisticsByDate(upcomingEventsPerformance);

    //past events table
    categoriesPerformance(pastEvents);
    pastEventTab.innerHTML = createStadisticsByDate(pastEventsPerformance);
  })
  .catch((e) => {
    console.log(e);
  });
