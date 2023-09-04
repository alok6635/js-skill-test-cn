var box = document.getElementById('box');
var clickCount = document.getElementById('click-count');
count = 0;
box.addEventListener('click', function(){
    count++;
    clickCount.innerText = count;
});