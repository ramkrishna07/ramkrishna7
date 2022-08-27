const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})

// hide style-switcher when scroll 
window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

// theme color 
const alternateStyles=document.querySelectorAll(".alternate-style");
function setActiveStyle(color){
    alternateStyles.forEach((style) => {
        if(color==style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled",true);
        }
    })
}

// light and dark mode 
// default mode is dark mode
const dayNight = document.querySelector(".day-night");
var image = document.querySelector('#founder-img');
dayNight.addEventListener("click", () =>{
   
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("light");
    /* preventing dark mode toggle on refreshing start*/
    var SetTheme=document.body;
    var theme;
    if(SetTheme.classList.contains("light")){
        theme="LIGHT";
        image.src = "img/Founder-light.png";
        
    }else{
        theme="DARK";
        image.src = "img/Founder-dark.png";
    }
    localStorage.setItem("PageTheme",JSON.stringify(theme));
})

let GetTheme=JSON.parse(localStorage.getItem("PageTheme"));

if(GetTheme==="LIGHT"){
    document.body.classList="light";
}

 /* preventing dark mode toggle on refreshing end*/
window.addEventListener("load", () =>{
    if(document.body.classList.contains("light")){
        dayNight.querySelector("i").classList.add("fa-moon");
        image.src = "img/Founder-light.png";
      
    }
    else{
        dayNight.querySelector("i").classList.add("fa-sun");
        image.src = "img/Founder-dark.png";
    }
})