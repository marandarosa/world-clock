setInterval(function () {
  let newYorkDate = document.querySelector(`#new-york`);
  if (newYorkDate) {
    let newYorkDateElement = newYorkDate.querySelector(`.date`);
    let newYorkTimeElement = newYorkDate.querySelector(`.time`);
    let newYorkCurrent = moment.tz(`America/New_York`);
    newYorkDateElement.innerHTML = newYorkCurrent.format(`MMMM Do, YYYY`);
    newYorkTimeElement.innerHTML = newYorkCurrent.format(
      `h:mm:ss [<small>]A[</small>]`
    );
  }

  let lisbonDate = document.querySelector(`#lisbon`);
  if (lisbonDate) {
    let lisbonDateElement = lisbonDate.querySelector(`.date`);
    let lisbonTimeElement = lisbonDate.querySelector(`.time`);
    let lisbonCurrent = moment.tz(`Europe/Lisbon`);
    lisbonDateElement.innerHTML = lisbonCurrent.format(`MMMM Do, YYYY`);
    lisbonTimeElement.innerHTML = lisbonCurrent.format(
      `h:mm:ss [<small>]A[</small>]`
    );
  }

  let aucklandDate = document.querySelector(`#auckland`);
  if (aucklandDate) {
    let aucklandDateElement = aucklandDate.querySelector(`.date`);
    let aucklandTimeElement = aucklandDate.querySelector(`.time`);
    let aucklandCurrent = moment.tz(`Pacific/Auckland`);
    aucklandDateElement.innerHTML = aucklandCurrent.format(`MMMM Do, YYYY`);
    aucklandTimeElement.innerHTML = aucklandCurrent.format(
      `h:mm:ss [<small>]A[</small>]`
    );
  }
}, 1000);

function updateCity(event) {
  setInterval(function () {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
      cityTimeZone = moment.tz.guess();
    }
    if (cityTimeZone === "default") {
      window.location = "/";
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment.tz(cityTimeZone);
    let citiesElement = document.querySelector(".cities");
    citiesElement.innerHTML = `
  <div class="city">
          <div>
            <h3>${cityName}</h3>
            <div class="date">${cityTime.format(`MMMM Do, YYYY`)}</div>
          </div>
          <div class="time">${cityTime.format(
            `hh:mm:ss [<small>]A[</small>]`
          )}</div>
        </div>
        <a href="/">Back to home page</a>
        `;
  }, 1000);
}

let citiesSelect = document.querySelector(`#city`);
citiesSelect.addEventListener("change", updateCity);
