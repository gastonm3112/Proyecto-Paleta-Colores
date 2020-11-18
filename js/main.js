document.getElementById('color').addEventListener('input', getColor);

function getColor(){
    let col = document.getElementById('color').value;
    

    document.getElementById('visual').style.background = col;
    document.getElementById('visual').innerHTML = col;

}