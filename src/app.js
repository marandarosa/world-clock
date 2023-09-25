setInterval(function () {
  let newYorkDate = document.querySelector(`#new-york`);
  let newYorkDateElement = newYorkDate.querySelector(`.date`);
  let newYorkTimeElement = newYorkDate.querySelector(`.time`);
  let newYorkCurrent = moment.tz(`America/New_York`);
  newYorkDateElement.innerHTML = newYorkCurrent.format(`MMMM Do, YYYY`);
  newYorkTimeElement.innerHTML = newYorkCurrent.format(
    `h:mm:ss [<small>]A[</small>]`
  );

  let lisbonDate = document.querySelector(`#lisbon`);
  let lisbonDateElement = lisbonDate.querySelector(`.date`);
  let lisbonTimeElement = lisbonDate.querySelector(`.time`);
  let lisbonCurrent = moment.tz(`Europe/Lisbon`);
  lisbonDateElement.innerHTML = lisbonCurrent.format(`MMMM Do, YYYY`);
  lisbonTimeElement.innerHTML = lisbonCurrent.format(
    `h:mm:ss [<small>]A[</small>]`
  );
}, 1000);
