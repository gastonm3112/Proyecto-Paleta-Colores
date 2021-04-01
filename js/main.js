const color = document.getElementById('color');
const visual = document.getElementById('visual');

color.addEventListener('input', () => {
    const colorValue = color.value;

    visual.innerHTML = colorValue;
    visual.style.background = colorValue;
    visual.style.color = "#ffffff";

});
