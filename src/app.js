function alertDate(event) {
  if (event.target.value === "paris") {
    let parisDate = moment
      .tz(`Europe/Paris`)
      .format(`dddd, MMMM D, YYYY h:mm A`);
    alert(`It is currently ${parisDate} in Europe/Paris`);
  }
  if (event.target.value === "tokyo") {
    let tokyoDate = moment.tz(`Asia/Tokyo`).format(`dddd, MMMM D, YYYY h:mm A`);
    alert(`It is currently ${tokyoDate} in Asia/Tokyo`);
  }
  if (event.target.value === "sydney") {
    let sydneyDate = moment
      .tz(`Australia/Sydney`)
      .format(`dddd, MMMM D, YYYY h:mm A`);
    alert(`It is currently ${sydneyDate} in Australia/Sydney`);
  }
}

let selectedCity = document.querySelector(`#city`);
selectedCity.addEventListener(`change`, alertDate);
