let searchBtn = document.querySelector("#search-btn");
let searchBar = document.querySelector(".search-container");

let loginBtn = document.querySelector("#login-btn");
let loginContainer = document.querySelector(".login-container");
let loginClose = document.querySelector("#form-close");

let menuBar = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");

let vidBtn = document.querySelectorAll(".vid-btn");

const swiper=new Swiper(".review-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        576: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
    }
})

const brandSwiper=new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 5,
        },
    }
})

window.onscroll = () => {
    searchBtn.classList.remove("fa-times");
    searchBar.classList.remove("active");
    menuBar.classList.remove("fa-times");
    navbar.classList.remove("active");
    loginContainer.classList.remove("active");
}

searchBtn.onclick = () => {
    searchBtn.classList.toggle("fa-times");
    searchBar.classList.toggle("active");
}

loginBtn.onclick = () => {
    loginContainer.classList.add("active");
}

loginClose.onclick = () => {
    loginContainer.classList.remove("active");
}

menuBar.onclick = () => {
    navbar.classList.toggle("active");
    menuBar.classList.toggle("fa-times");
}

vidBtn.forEach(btn => {
    btn.onclick=()=> {
        document.querySelector(".controls .active").classList.remove("active");
        btn.classList.add("active");
        let src=btn.getAttribute("data-src");
        document.querySelector("#video-slider").src= src;
    }
})