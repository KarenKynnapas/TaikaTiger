const nav = document.querySelector('.navbar');
window.onscroll = function(){
    var top = window.scrollY;
    console.log(top);
    if (top >= 100){
        nav.classList.add('active')
    }else{
        nav.classList.remove('active');
    }
}