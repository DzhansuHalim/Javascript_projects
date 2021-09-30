const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color')

btn.addEventListener("click", function(){

    let generateColor = "#";

    for (let index = 0; index < 6; index++) {
        generateColor += hex[generateColorHex()]      
    }

    document.body.style.backgroundColor = generateColor;
    color.innerHTML = generateColor;

});

function generateColorHex(){
    return Math.floor(Math.random() * hex.length);
}