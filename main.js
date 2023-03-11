
function fetchData() {
    fetch('./results-summary-component-main/data.json')
    .then((response) => response.json())
    .then((data) => console.log(data));
    
}

fetchData();