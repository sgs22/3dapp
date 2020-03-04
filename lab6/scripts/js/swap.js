
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
    //Use this to change the style dynamically
    document.getElementById('body').style.backgroundColor = '#343a40';
    document.getElementById('header').style.fontFamily = 'ariel,sans-serif';
    document.getElementById('footer').style.color = '#212529';
    document.getElementsById('card').style.color = '#212529';
}
function changeBack() {
    document.getElementById('body').style.backgroundColor = 'white';
    document.getElementById('footer').style.backgroundColor = '#760003';
    
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
