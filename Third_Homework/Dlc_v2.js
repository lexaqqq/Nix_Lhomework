'use strict';
function data(){
    const date = document.querySelector(".date"),
      dateBtn = document.querySelector(".date-btn");
dateBtn.addEventListener("click", () =>{
    let newDate = new Date();
    let week = newDate.getDay();
    date.innerHTML = week;
});
}



const lists = ()=>{
    const list = document.querySelector(".list"),
    addToList = document.querySelector(".add"),
    text = document.querySelector(".text");

addToList.addEventListener("click", () =>{
  let str = text.value.split(" ");
  for(let i = 0; i < str.length; i++){
      const li = document.createElement("li");
      if( i === 0){
          li.innerHTML = str[i].toUpperCase();
      }
      else if(i == str.length-1 || i == str.length-2){
          li.innerHTML = str[i].toLowerCase();
      }
      else {li.innerHTML = str[i];}

      list.append(li);
  }
  alert(text.value.split("a").length - 1);

});
};




const clear = document.querySelector(".clear"),
      swit = document.querySelector(".switch"),
      div2 = document.querySelector(".div-2"),
      span = document.querySelector(".span");

function displ(){


        if(div2.style.display === "none" ){
            div2.style.display = "block";
    
        }
        else{
            div2.style.display = "none";
            span.style.opacity = "1";
        }
  
}
function undispl(){
    div2.style.display = "block";
    span.style.opacity = "0";
    swit.removeEventListener("click", displ);
}



/**
 * 
 * Не знаю как сделать так, чтоб див остановился при касании с концом экрана
 */
const div = document.querySelector(".div"),
      reset = document.querySelector(".reset");
      
let edge = document.documentElement.getBoundingClientRect(),
    place = parseInt(div.style.width),
    counter;

function move(){
    if(edge.right !== place){
        let right = div.offsetLeft;
        div.style.left = right + 20 + "px";
    }
    else{div.style.left = right + 0 + "px";}
}



div.addEventListener("click", ()=>{
    counter = setInterval(move,50);
});

reset.addEventListener("click", () =>{
    clearInterval(counter);
});


swit.addEventListener("click",displ);


clear.addEventListener("click",undispl); 


data();


lists();