//header scroll
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if(document.documentElement.scroll.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
}

//nav hide
