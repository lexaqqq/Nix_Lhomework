'use strict';
function noselect() {return false;}

var popoverTriggerList = [].slice.call( document.querySelectorAll( '[data-toggle="popover"]' ) );
var popoverList = popoverTriggerList.map( function( popoverTrigger )
{
    return new bootstrap.Popover( popoverTrigger );
} );
$("#modalButton").click(function(){
$("#buttonAlert").addClass('show')
});


const progressBar = document.querySelector(".progress-bar"),
    body = document.querySelector("body"),
    footer = document.querySelector("footer"),
    changeTheme = document.querySelector(".theme-button"),
    anchors = document.querySelectorAll('a[href*="#"]'),
    importantBtn = document.querySelector("#important-button"),    
    n = document.querySelector(".name"),
    surname = document.querySelector(".surname"),
    email = document.querySelector("input[type=email]"),
    number = document.querySelector("input[type=number]");


const changes = () =>{

changeTheme.addEventListener("click", () =>{
  if(body.classList.contains("bg-light")){
      body.classList.remove("bg-light");
      body.classList.add("bg-dark");
      document.querySelector("nav").classList.remove("navbar-light");
      document.querySelector("nav").classList.add("navbar-dark");
      document.querySelector("nav").classList.remove("bg-light");
      document.querySelector("nav").classList.add("bg-dark");
      document.querySelector("#cat").style.color = "#9484f2";
      document.querySelector(".contact").style.color = "#9484f2";
  }
  else{
      body.classList.remove("bg-dark");
      body.classList.add("bg-light");
      document.querySelector("nav").classList.remove("navbar-dark");
      document.querySelector("nav").classList.add("navbar-light");
      document.querySelector("nav").classList.remove("bg-dark");
      document.querySelector("nav").classList.add("bg-light");
      document.querySelector("#cat").style.color = "#9484f2";
      document.querySelector(".contact").style.color = "#9484f2";
  }
});
};


const smoothScroll = () =>{
    anchors.forEach(anchor => {
        anchor.addEventListener("click", (e)=>{
            e.preventDefault();
            const blockID = anchor.getAttribute("href");
            document.querySelector("" + blockID).scrollIntoView({
                behavior: "smooth",
                block:"start"
            });
    
        });
    });
};


function myFunction() {
var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
var scrolled = (winScroll / height) * 100;
progressBar.style.width = scrolled + "%";
}

const inactivityTime = function () {
    let t;
    window.onload = resetTimer;
    document.onmousemove = resetTimer;
    document.onkeypress = resetTimer;

    function logout() {
       result = confirm("Are you here?");
       if(result){
         resetTimer();
       }
       else{
        window.location.href = 'logout.html';
       }
    }
    function resetTimer() {
        clearTimeout(t);
        t = setTimeout(logout, 50000);
    }
};

const validation = () =>{
    importantBtn.addEventListener("click", () =>{

        if(n.value == "" || surname.value == "" || email.value == "" || number.value == ""  ){
            n.style.backgroundColor = "red";
            surname.style.backgroundColor = "red";
            email.style.backgroundColor = "red";
            number.style.backgroundColor = "red";
        }else{
            alert(`Name: ${n.value}
Surname: ${surname.value}
Email: ${email.value}
Number: ${number.value}
    `);
    n.style.backgroundColor = "white";
    surname.style.backgroundColor = "white";
    email.style.backgroundColor = "white";
    number.style.backgroundColor = "white";
        }
        
    
    });
};

const browserName = () => {
    let sBrowser, sUsrAg = navigator.userAgent;

    if (sUsrAg.indexOf("Firefox") > -1) {
         sBrowser = "Mozilla Firefox";
    } else if (sUsrAg.indexOf("Opera") > -1) {
         sBrowser = "Opera";
    } else if (sUsrAg.indexOf("Trident") > -1) {
         sBrowser = "Microsoft Internet Explorer";
    } else if (sUsrAg.indexOf("Edge") > -1) {
         sBrowser = "Microsoft Edge";
    } else if (sUsrAg.indexOf("Chrome") > -1) {
        sBrowser = "Google Chrome or Chromium";
    } else if (sUsrAg.indexOf("Safari") > -1) {
        sBrowser = "Apple Safari";
    } else {
        sBrowser = "unknown";
    }

    footer.append(sBrowser);
};

document.ondragstart = noselect;
document.onselectstart = noselect;
document.oncontextmenu = noselect;

changes();

inactivityTime();

smoothScroll();

window.onscroll = function() {myFunction()};

validation();

browserName();