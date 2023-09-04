const light = document.querySelector('#bulb');
light.addEventListener('click', function(bulb){
    bulb.target.classList.toggle('bulb-on');
})