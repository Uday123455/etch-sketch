
const control=document.querySelector(".control");



for(let i=0;i<100;i++){
    const newdiv=document.createElement("div");
    newdiv.className="pixel";
    control.appendChild(newdiv);
};