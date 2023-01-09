export default function homePage(){
    const herosBody = document.createElement("div");
    herosBody.id = "herosBody";
    content.appendChild(herosBody);

    const lars = document.createElement("div");
    lars.id = "lars";
    lars.className = "heros";
    herosBody.appendChild(lars);

    const kristoffer = document.createElement("div");
    kristoffer.id = "kristoffer";
    kristoffer.className = "heros";
    herosBody.appendChild(kristoffer);

    const emelie = document.createElement("div");
    emelie.id = "emelie";
    emelie.className = "heros";
    herosBody.appendChild(emelie);

    const fredrik = document.createElement("div");
    fredrik.id = "fredrik";
    fredrik.className = "heros";
    herosBody.appendChild(fredrik);

    const alexander = document.createElement("div");
    alexander.id = "alexander";
    alexander.className = "heros";
    herosBody.appendChild(alexander);


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
}