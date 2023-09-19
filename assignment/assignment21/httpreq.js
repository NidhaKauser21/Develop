document.getElementById("getDataBtn").addEventListener("click", getData);

function getData() {
  const xhr = new XMLHttpRequest();
  const url = "https://data.covid19india.org/state_district_wise.json";

  xhr.open("GET", url, true);

  xhr.onload = function () {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      displayResult(data);
    } else {
      displayResult("Error fetching data");
    }
  };

  xhr.onerror = function () {
    displayResult("Error fetching data");
  };

  xhr.send();
}

function displayResult(data) {
  const resultDiv = document.getElementById("result");
  if (typeof data === "string") {
    resultDiv.innerText = data;
  } else {
    resultDiv.innerText = JSON.stringify(data, null, 2);
  }
}
