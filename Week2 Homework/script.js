//#region Current Date
let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = days[now.getDay()];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function formatDate(_date) {
  return `<div>${days[_date.getDay()]}, ${
    months[_date.getMonth()]
  } ${_date.getDate()}</div>`;
}

function formatTime() {
  return `${now.getHours()}:${now.getMinutes()}`;
}

function newInnerHtml() {
  let newDateAndTime = `${formatDate(new Date())} ${formatTime()}`;
  return newDateAndTime;
}

let date = document.querySelector("#currentDate");
date.innerHTML = newInnerHtml();
//#endregion

//#region Search
function searchInput(event) {
  event.preventDefault();

  let inputValue = document.querySelector("#input");
  let city = document.querySelector("#currentCity");
  if (inputValue.value.trim().length) {
    city.innerHTML = inputValue.value;
  }
}

let btnSubmit = document.querySelector("#btn_submit");
btnSubmit.addEventListener("click", (event) => searchInput(event));
//#endregion

//#region C/F display change
function changeUnitToCelsius() {
    let currentTemp = document.querySelector("p.current-temp");
    currentTemp.innerHTML = "15°";
}

let unitC = document.querySelector("#celsius")
unitC.addEventListener("click", changeUnitToCelsius);

function changeUnitToFahrenheit() {
  let currentTemp = document.querySelector("p.current-temp");
  currentTemp.innerHTML = "59°";
}

let unitF = document.querySelector("#fahrenheit");
unitF.addEventListener("click", changeUnitToFahrenheit);
//#endregion