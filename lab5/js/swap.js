
var counter = 0;

function swap(selected) {
    //first dont display all div id elements
    document.getElementById('home').style.display = 'none';
    document.getElementById('coke').style.display = 'none';
    document.getElementById('sprite').style.display = 'none';
    document.getElementById('drpepper').style.display = 'none';

    //then display the selected div id contents
    document.getElementById(selected).style.display = 'block';
}
function changeLook() {
    //Use this to chaneg the style dynamically
    document.getElementById('theme').style.backgroundColor = '#770000';
    document.getElementById('theme').style.fontFamily = 'ariel,sans-serif';
    document.getElementById('theme').style.color = 'white';
}
function countUp() {
    //Simple incremental counter
    counter += 1;
    //assign the counter result to the inn HTML of the result div tag
    document.getElementById('result').innerHTML = counter;
}
function changeColor(newColor) {
    var elem = document.getElementById('para1');
    elem.style.color = newColor;
}
