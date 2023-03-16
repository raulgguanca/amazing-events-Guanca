setTimeout(() => {
  //variables
  const eventStdtcsTab = document.getElementById("eventStadisticsTab");

  const upcEventTab = document.getElementById("upcEventsTab");

  const pastEventTab = document.getElementById("pastEventsTab");

  const arrayEvents = allEvents.events;

  const getCurrentDate = allEvents.currenDate;

  //functions
  let pastEvents = [];

  for (const event of arrayEvents) {
    if (getCurrentDate > event.date) {
      pastEvents.push(event);
    }
  }

  function statsRanking(events) {
    let evnStas = "";
    if (!evnStas.length > 3) {
      for (const evnt of events.sort()) {
        evnStas += `
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        `;
      }
    }
    return evnStas;
  }

  let evntCreator = statsRanking(arrayEvents);

  function paintEvents() {
    eventStdtcsTab.innerHTML = evntCreator;
  }
}, 1500);
