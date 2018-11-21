// document.getElementById("button").addEventListener("click", function() {
//     let user = "";
//     user = document.getElementById("input").val;
//   let url = `https://swapi.co/api/people`;

//   async function getUser() {
//     let res = await fetch(url);
//     let data = await res.json();
//     renderOutput(data);
//   }
// });

// if (user != "") {
//   getUser();
// } else {
//   alert("input username");
// }

// function renderOutput(data) {
//   data.results.forEach(element => {
//     let list = document.getElementById("output");
//     let listItem = document.createElement("li");
//     list.appendChild(listItem);
//     listItem.innerText = element.name;
//   });
// }
let i = 2;
let buttonNext = document.getElementById("next");
buttonNext.addEventListener("click", nextPage);

function nextPage() {
  fetch(`https://swapi.co/api/people/?page=${i}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      let characterArray = [];

      data["results"].forEach(element => {
        function Person(first, height, mass, dob, gender) {
          (this.name = first),
            (this.height = height),
            (this.mass = mass),
            (this.dob = dob),
            (this.gender = gender);
        }

        let user = new Person(
          element.name,
          element.height,
          element.mass,
          element["birth_year"],
          element.gender
        );

        characterArray.push(user);

        display(characterArray);
      });
    });

  i++;
}

let button = document.getElementById("button");
button.addEventListener("click", listNames);

function listNames() {
  fetch("https://swapi.co/api/people/")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      let characterArray = [];

      data["results"].forEach(element => {
        function Person(first, height, mass, dob, gender) {
          (this.name = first),
            (this.height = height),
            (this.mass = mass),
            (this.dob = dob),
            (this.gender = gender);
        }

        let user = new Person(
          element.name,
          element.height,
          element.mass,
          element["birth_year"],
          element.gender
        );

        characterArray.push(user);

        display(characterArray);
      });
    });

  i = 2;
}

let searchButton = document.getElementById("search");
searchButton.addEventListener("click", search);

function search() {
  let searchTerm = document.getElementById("input").value;

  fetch(`https://swapi.co/api/people/?search=${searchTerm}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      let characterArray = [];

      data["results"].forEach(element => {
        function Person(first, height, mass, dob, gender) {
          (this.name = first),
            (this.height = height),
            (this.mass = mass),
            (this.dob = dob),
            (this.gender = gender);
        }

        let user = new Person(
          element.name,
          element.height,
          element.mass,
          element["birth_year"],
          element.gender
        );

        characterArray.push(user);

        display(characterArray);
      });
    });
}

function display(arr) {
  document.getElementById("output").innerHTML = "";
  let output = document.getElementById("output");
  arr.forEach(function(char) {
    let html = `
    <div class="card" style="min-width: 20rem;">
        <div class="card-body">
        <h5 class="card-title"> ${char.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Born on ${char.dob}</h6>
        <p class="card-text">
        <table class="table table-dark">
            <tr>
            <th>Height</th>
            <th>Mass</th>
            <th>Gender</th>
            </tr>
            <tr>
            <td>${char.height}</td>
            <td>${char.mass}</td>
            <td>${char.gender}</td>
            </tr>
        </table>
        </p>
        </div>
    </div>`;

    output.innerHTML += html;
  });
}
