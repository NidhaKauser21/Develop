function fetchData(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function displayData(data) {
    const formattedData = JSON.stringify(data, null, 2);
    const dataContainer = document.getElementById('data-container');
    dataContainer.textContent = formattedData;
}

const dataUrl = 'https://data.covid19india.org/state_district_wise.json';

fetchData(dataUrl)
    .then(data => displayData(data));
