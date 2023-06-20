var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good evening!';
}

if (hourNow > 12) {
    greeting = 'Good afternoon';
}

if (hourNow > 0) {
    greeting = 'Good morning';
}

document.write('<h3>' + greeting + '</h3>');