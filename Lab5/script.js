function onClickHandler() {
    let nameElement = document.getElementById("name");
    let idcardElement = document.getElementById("idcard");
    let facultyElement = document.getElementById("faculty");
    let bdayElement = document.getElementById("bday");
    let addressElement = document.getElementById("address");

    const name = nameElement.value;
    const idcard = idcardElement.value;
    const faculty = facultyElement.value;
    const bday = bdayElement.value;
    const address = addressElement.value;

    const nameProbe = /[А-яІіЇїЄє]{1,} [А-яІіЇїЄє]\.[А-яІіЇїЄє]\./.test(name);
    const idcardProbe = /[А-яІіЇїЄє]{2} №\d{6}/.test(idcard);
    const facultyProbe = /[А-яІіЇїЄє]{4}/.test(faculty);
    const bdayProbe = /\d{2}\.\d{2}\.\d{4}/.test(bday);
    const addressProbe = /м. [А-яІіЇїЄє]{2,}/.test(address);

    let message = "Некоректне заповнення форми\n";

    if (!nameProbe) {
        nameElement.style.borderColor = "red";
        message += "Форма для заповення ПІБ: ТТТТТТ Т.Т.\n";
    } else {
        nameElement.style.borderColor = "green";
    }

    if (!idcardProbe) {
        idcardElement.style.borderColor = "red";
        message += "Форма для заповення ID-карти: ТТ №ЧЧЧЧЧЧ\n";
    } else {
        idcardElement.style.borderColor = "green";
    }
    
    if (!facultyProbe) {
        facultyElement.style.borderColor = "red";
        message += "Форма для заповення факультета: ТТТТ\n";
    } else {
        facultyElement.style.borderColor = "green";
    }
    
    if (!bdayProbe) {
        bdayElement.style.borderColor = "red";
        message += "Форма для заповення дня народження: ЧЧ.ЧЧ.ЧЧЧЧ\n";
    } else {
        bdayElement.style.borderColor = "green";
    }

    if (!addressProbe) {
        addressElement.style.borderColor = "red";
        message += "Форма для заповення адреси: м. ТТТТТТ\n";
    } else {
        addressElement.style.borderColor = "green";
    }

    if (nameProbe && idcardProbe && facultyProbe && bdayProbe && addressProbe) {
        const output = document.getElementById("output-info");
        const info = document.createElement("h2");
        info.style.textAlign = "center";
        info.style.marginTop = "10%";
        info.innerText = "Введена інформація користувача\n" + name + '\n' + idcard + '\n' + faculty + '\n' + bday + '\n' + address;
        output.textContent = '';
        output.appendChild(info);
    } else {
        message += "де Т-символ, Ч-число";
        alert(message);
    }
}

document.querySelector("form button").addEventListener("click", onClickHandler);

const table = document.createElement("table");
let row;

for (let i = 1; i < 37; i++) {
    if (i % 6 == 1)
        row = document.createElement("tr");
    
    let cell = document.createElement("td");
    cell.innerText = i;
    cell.id = "cell-" + i;
    row.appendChild(cell);
    
    if (i % 6 == 0)
        table.appendChild(row);
}

document.querySelector("body").appendChild(table);

const spec_cell = document.getElementById("cell-7");
const color_picker = document.getElementById("color-picker");

function mouseoverCellHandler(event) {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    event.target.style.backgroundColor = '#' + randomColor;
}

color_picker.addEventListener("change", () => {
    spec_cell.style.backgroundColor = color_picker.value;
});

var waitingForClick = false;

function clickCellHandler(event) {
    switch (event.detail) {
        case 1:
            waitingForClick = setTimeout(function() {
                let ev = new MouseEvent("click", null);
                color_picker.dispatchEvent(ev);
            }, 200);
            break;
        default:
            if (waitingForClick) {
                clearTimeout(waitingForClick);
                waitingForClick = false;
            }
            const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
            const idx = parseInt(event.target.id.toString().split('-')[1]);
            const rBorder = ((idx - 1) / 6 + 1) * 6;
            for (let i = idx; i <= rBorder; i += 2) {
                document.getElementById("cell-" + i).style.backgroundColor = color;
            }
            break;
    }
}

spec_cell.addEventListener("mouseover", mouseoverCellHandler);
spec_cell.addEventListener("click", clickCellHandler);