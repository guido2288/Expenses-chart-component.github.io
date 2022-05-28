const stats = document.querySelectorAll(".bar");

const amountDisplay = document.createElement("div");

amountDisplay.className = "amount-display";

const getData = () => {
  fetch("./data.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      for (let i = 0; i < stats.length; i++) {
        stats[i].addEventListener("mouseover", function () {
          amountDisplay.innerHTML = `$${data[i].amount}`;
          stats[i].appendChild(amountDisplay);
        });

        stats[i].addEventListener("mouseout", function () {
          stats[i].removeChild(amountDisplay);
        });
      }
    });
};

getData();
