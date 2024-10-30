// ! HAMBURGER CONSTANTS
const menuBtn = document.querySelector(".menu-bars");
const sidebarEl = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-sidebar");

const dateEl = document.querySelectorAll("#js-date");
const timeEl = document.querySelectorAll("#js-time");

// !THEME MODE CONSTANTS
const themeBtn = document.querySelector(".theme-btn");

// ! THEME MODE FUNCTIONING
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    themeBtn.innerHTML = `<i class='bx bx-sun' ></i>`;

    localStorage.setItem("currentTheme", "dark-theme");
  } else {
    themeBtn.innerHTML = `<i class='bx bx-moon' ></i>`;
    localStorage.setItem("currentTheme", "");
  }
});

document.body.className = localStorage.getItem("currentTheme");

if (document.body.classList.contains("dark-theme")) {
  themeBtn.innerHTML = `<i class='bx bx-sun' ></i>`;

  localStorage.setItem("currentTheme", "dark-theme");
} else {
  themeBtn.innerHTML = `<i class='bx bx-moon' ></i>`;
  localStorage.setItem("currentTheme", "");
}

// ! HAMBURGER MENU FUNCTIONING
menuBtn.addEventListener("click", () => sidebarEl.classList.toggle("actives"));
closeBtn.addEventListener("click", () => menuBtn.click());

// ! SET THE TIME TO BE FUNCTIONAL
function startClock() {
  function updateClock() {
    const today = new Date();
    const hours = (today.getHours() < 10 ? "0" : "") + today.getHours();
    const minutes = (today.getMinutes() < 10 ? "0" : "") + today.getMinutes();
    const seconds = (today.getSeconds() < 10 ? "0" : "") + today.getSeconds();
    const period = hours > 12 ? "PM" : "AM";

    timeEl.forEach((time) => {
      time.innerHTML = `${hours} : ${minutes} : ${seconds} ${period}`;
    });

    setTimeout(updateClock, 1000);
  }
  updateClock();
}

startClock();

const today = new Date();
const date = today.getDate();
const month = today.toLocaleString("default", {
  month: "short",
});
const year = today.getFullYear();
const period = date > 3 ? "th" : "";

// ! CHANGE THE DATE TO CURRENT DATE
dateEl.forEach((dates) => {
  dates.innerHTML = `${date}${period}, ${month}, ${year}`;
});

// ! TRADING CHARTS

// ! CHARTS CONSTANTS
const charts = document.querySelector("#charts").getContext("2d");
new Chart(charts, {
  type: "line",
  data: {
    labels: [
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
    ],

    datasets: [
      {
        label: "BTC",
        data: [
          29898, 29876, 29871, 34859, 58978, 43789, 38910, 47892, 89039, 48902,
          45786, 98764,
        ],
        borderColor: "red",
        borderWidth: 1,
      },

      {
        label: "ETH",
        data: [
          58940, 48920, 38574, 59010, 87646, 86753, 58694, 58321, 57392, 86754,
          68736, 87625,
        ],
        borderColor: "blue",
        borderWidth: 1,
      },

      {
        label: "USDT",
        data: [
          78570, 67429, 75864, 83112, 45626, 31743, 85314, 78310, 46329, 33584,
          53115, 74314,
        ],
        borderColor: "green",
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
  },
});
