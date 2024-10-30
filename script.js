const charts = document.querySelector("#charts").getContext("2d");
const dateEl = document.querySelectorAll("#js-date");
const today = new Date();

const date = today.getDate();
const month = today.toLocaleString("default", {
  month: "short",
});
const year = today.getFullYear();

console.log(year);

// ! CHANGE THE DATE TO CURRENT DATE
dateEl.forEach((dates) => {
  dates.innerHTML = `${date}, ${month}, ${year}`;
});

// ! TRADING CHARTS
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
