// set the primary body color-
const body = document.querySelector('body');
 body.style.backgroundColor = 'violet'

//  button event -
const button = document.querySelector('.btn');
 const color = ['red','yellow','green','black','blue','pink'];
 button.addEventListener('click', changeB)

 function changeB(){
    const colorIndex = parseInt(Math.random()*color.length);
    body.style.background = color[colorIndex];
 }