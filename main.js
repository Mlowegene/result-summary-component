function fetchData() {
  fetch("./results-summary-component-main/data.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      const resultContainer = document.querySelector(".result-descriptions");

      data.forEach((datas) => {
        const result = document.createElement("div");
        result.className = `result-description ${datas.category
          .toLowerCase()
          .replace(/\s+/g, "-")}`;
        result.innerHTML = `
    <img class="reaction-image" src=${datas.icon} alt="reaction-icon" />
    <p class="title">${datas.category}</p>
    <p class="value"><span class="number-color">${datas.score}</span> <span class="default-color">/ 100</span></p>
  `;
        resultContainer.appendChild(result);
      });
    });
}

fetchData();
