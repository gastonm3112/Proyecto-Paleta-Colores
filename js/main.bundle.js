"use strict";

var color = document.getElementById('color');
var visual = document.getElementById('visual');
color.addEventListener('input', function () {
    var colorValue = color.value;
    visual.innerHTML = colorValue;
    visual.style.background = colorValue;
    visual.style.color = "#ffffff";
});