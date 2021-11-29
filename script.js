const hex = [1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
document.getElementById('btn').addEventListener('click', function(){
    let color = document.querySelector('.color');
    let hexColor = '#';
    for(let i = 0; i < 6; i++){
        hexColor += hex[getColor()];
    }
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
})
function getColor(){
    return Math.floor(Math.random() * hex.length)
}
