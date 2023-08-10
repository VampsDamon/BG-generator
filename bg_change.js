let button=document.querySelector('.btn');
let currentColor=document.querySelector(".currentColor")
let body=document.body;
function randomCol(){
    let red=Math.floor(Math.random()*256);
    let green=Math.floor(Math.random()*256);
    let blue=Math.floor(Math.random()*256);
   
    const randomColor=`rgb(${red},${green},${blue})`;
    body.style.backgroundColor=randomColor;
    currentColor.textContent=randomColor;
    return randomColor;
}
button.addEventListener("click", ()=>{
    const randomColor=randomCol();
    body.style.backgroundColor=randomColor;
    currentColor.textContent=randomColor;
});