let cell=16;
const control=document.querySelector(".control");
const length=512;




control.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "orange";
});

function enter(){
    cell=prompt("enter your number");
    if(cell<101){
         clean();
    creategrid();
    }
}
function clean(){
    control.innerHTML="";
}
function kala(){
    
    clean();
    creategrid();
}
function creategrid(){
    for(let i=0;i<cell*cell;i++){
    const newdiv=document.createElement("div");
    newdiv.className="pixel";
    newdiv.style.height=`${length/cell}px`;
    newdiv.style.width=`${length/cell}px`
    control.appendChild(newdiv);
};
}


creategrid();
