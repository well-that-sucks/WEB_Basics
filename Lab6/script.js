const downloadBtn = document.getElementById("download-button");

function clickHandler(event) {
    fetch("https://randomuser.me/api/?results=5")
        .then((data) => data.json())
        .then((data) => {
            for (let i = 0; i < 5; i++) {
                let person = document.querySelector("#info").children[i];
                person.innerHTML = '';

                const picture = document.createElement("img");
                picture.src = data.results[i].picture.large;
                person.appendChild(picture);

                const city = document.createElement("p");
                city.innerText = "City: " + data.results[i].location.city;
                person.appendChild(city);

                const name = document.createElement("p");
                name.innerText = "Name: " + data.results[i].name.first + ' ' + data.results[i].name.last;
                person.appendChild(name);

                const cell = document.createElement("p");
                cell.innerText = "Cellphone number: " + data.results[i].cell;
                person.appendChild(cell);

                const phone = document.createElement("p");
                phone.innerText = "Phone number: " + data.results[i].phone;
                person.appendChild(phone);
            }
            
        });
}

downloadBtn.addEventListener("click", clickHandler);