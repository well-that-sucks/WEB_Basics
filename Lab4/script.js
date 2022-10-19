const text_colors = ["chartreuse", "aquamarine"];
const background_colors = ["green", "chocolate"];

const colored_element1 = document.getElementById("colored_element1");
const colored_element2 = document.querySelector("#colored_element2");

function changeColor(event) {
    const elem = event.target;
    let index = elem.style.backgroundColor == background_colors[0] ? 0 : 1;
    elem.style.backgroundColor = background_colors[1 - index];
    elem.style.color = text_colors[1 - index];
}

colored_element1.addEventListener("click", changeColor);
colored_element2.addEventListener("click", changeColor);


const adding_button = document.getElementById("adding_img");
const zoomin_button = document.getElementById("zoomin_img");
const zoomout_button = document.getElementById("zoomout_img");
const remove_button = document.getElementById("remove_img");

function add_img() {
    const img = document.createElement("img");
    img.src = "https://www.zhitomir.info/f/images/2013/07/26/124904/2013-07-2600556564554_w440_h290.jpg";
    const src = document.getElementById("images");
    img.style.display = "block";
    img.style.width = "50%";
    img.style.marginBottom = "10px";
    src.appendChild(img);
    img.scrollIntoView();
}

function zoomin_img() {
    const images_array = document.querySelectorAll("#images img");
    const img = images_array[images_array.length - 1];
    img.style.width = Number.parseInt(img.style.width) + 5 + "%";
}

function zoomout_img() {
    const images_array = document.querySelectorAll("#images img");
    const img = images_array[images_array.length - 1];
    img.style.width = Number.parseInt(img.style.width) - 5 + "%";
}

function remove_img() {
    const images_array = document.querySelectorAll("#images img");
    const img = images_array[images_array.length - 1];
    img.remove();
}

adding_button.addEventListener("click", add_img);
zoomin_button.addEventListener("click", zoomin_img);
zoomout_button.addEventListener("click", zoomout_img);
remove_button.addEventListener("click", remove_img);