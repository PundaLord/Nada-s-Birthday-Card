let stars = document.getElementById('stars');
let Moon = document.getElementById('Moon');
let BTS = document.getElementById('BTS');
let Clouds = document.getElementById('Clouds');
let Nada = document.querySelector('.Nada');
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    Moon.style.top = value * 3 + 'px';
    BTS.style.top = value * 4 + 'px';
    Clouds.style.top = value + 'px';
    Nada.style.fontSize = value + 'px'; 
     if(scrollY >= 236){
        Nada.style.fontSize = 236 + 'px';
        Nada.style.postin = 'fixed';
}
}