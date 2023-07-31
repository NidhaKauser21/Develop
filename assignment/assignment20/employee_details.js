// Function to fetch the data from the Employees JSON
function fetchData() {
  return new Promise(function (resolve, reject) {
    const data = {
      "Employees": [
        {
          "userId": "krish",
          "jobTitle": "Developer",
          "firstName": "Krish",
          "lastName": "Lee",
          "employeeCode": "E1",
          "region": "CA",
          "phoneNumber": "123456",
          "emailAddress": "krish.lee@learningcontainer.com"
        },
        {
          "userId": "devid",
          "jobTitle": "Developer",
          "firstName": "Devid",
          "lastName": "Rome",
          "employeeCode": "E2",
          "region": "CA",
          "phoneNumber": "1111111",
          "emailAddress": "devid.rome@learningcontainer.com"
        },
        {
          "userId": "tin",
          "jobTitle": "Program Directory",
          "firstName": "tin",
          "lastName": "jonson",
          "employeeCode": "E3",
          "region": "CA",
          "phoneNumber": "2222222",
          "emailAddress": "tin.jonson@learningcontainer.com"
        },
        {
          "userId": "krish",
          "jobTitle": "Developer",
          "firstName": "Krish",
          "lastName": "Lee",
          "employeeCode": "E1",
          "region": "CA",
          "phoneNumber": "123456",
          "emailAddress": "krish.lee@learningcontainer.com"
        },
        {
          "userId": "devid",
          "jobTitle": "Developer",
          "firstName": "Devid",
          "lastName": "Rome",
          "employeeCode": "E2",
          "region": "CA",
          "phoneNumber": "1111111",
          "emailAddress": "devid.rome@learningcontainer.com"
        },
        {
          "userId": "tin",
          "jobTitle": "Program Directory",
          "firstName": "tin",
          "lastName": "jonson",
          "employeeCode": "E3",
          "region": "CA",
          "phoneNumber": "2222222",
          "emailAddress": "tin.jonson@learningcontainer.com"
        }
      ]
    };

    if (data) {
      resolve(data.Employees);
    } else {
      reject("Error fetching data!");
    }
  });
}

//  Function to create and populate the table
function createTable(data) {
  const tableBody = document.querySelector("tbody");

  data.forEach(employee => {
    const row = document.createElement("tr");
    Object.values(employee);
    // ["tin","program directory","tin","jonson","E3",....]
    //userID|jobtitle|Firstname|Lastname|employeecode|region|phno|emailaddress
    // {
    //   "userId": "tin",
    //   "jobTitle": "Program Directory",
    //   "firstName": "tin",
    //   "lastName": "jonson",
    //   "employeeCode": "E3",
    //   "region": "CA",
    //    "2222222",
    //    "tin.jonson@learningcontainer.com"
    // }
    Object.values(employee).forEach(value => {
      const cell = document.createElement("td");
      cell.textContent = value;
      row.appendChild(cell);
    });
    tableBody.appendChild(row);
  });
}

// To Fetch data and create the table
fetchData()
  .then(data => {
    createTable(data);
  })
  .catch(error => {
    console.error(error);
  });
