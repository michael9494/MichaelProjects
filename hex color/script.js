const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']; // ex hex #F453B0
const hexBtn = document.querySelector('.hexBtn'); //selectare clasa buton
const bodyBcg = document.querySelector('body'); // selectare clasa body
const hex = document.querySelector('.hex'); // selectare clasa hex

hexBtn.addEventListener('click',getHex); // click event - callback function getHex

function getHex(){
    let hexCol = '#'; // hold hex color
    for(let i = 0; i<6; i++){
        let random = Math.floor(Math.random()*hexNumbers.length);
        hexCol +=hexNumbers[random]; //The += assignment operator can also be used to add (concatenate) strings:
        
    }
    bodyBcg.style.backgroundColor = hexCol;
    hex.innerHTML = hexCol; //The innerHTML property sets or returns the HTML content (inner HTML) of an element.


    
}