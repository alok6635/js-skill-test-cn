var colorBtn = document.getElementById('btn');
colorBtn.addEventListener("click",ele)

function ele(){
   var cirle = document.getElementsByClassName('circle')[0];
   cirle.style.backgroundColor  = 'black'
}

var shapeBtn = document.getElementById('btn_shape');
shapeBtn.addEventListener("click", element)

function element(){
    var square = document.getElementsByClassName('square')[0];
    square.style.background = 'linear-gradient(to bottom right, #fff 0%, #fff 50%, green 50%, green 100%)';
}
