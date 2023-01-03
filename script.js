const herosBody = document.getElementById("herosBody");
let lars = document.getElementById("lars");
let kristoffer = document.getElementById("kristoffer");
let emelie = document.getElementById("emelie");
let fredrik = document.getElementById("fredrik");
const homeBtn = document.getElementById("homeBtn");

lars.addEventListener("click", ()=>{
  herosBody.remove();
})

kristoffer.addEventListener("click", ()=>{
  herosBody.remove();
})

emelie.addEventListener("click", ()=>{
  herosBody.remove();
})

fredrik.addEventListener("click", ()=>{
  herosBody.remove();
})

homeBtn.addEventListener("click", ()=>{
  document.location.reload()
})
