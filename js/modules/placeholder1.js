export default function createPlaceholder1() {
    let contentDiv = document.getElementById("content");
    let something1Div = document.createElement("div");
    something1Div.classList.add("gridDiv");
    something1Div.innerHTML = `Something`;
    something1Div.style.gridArea = "free1";
    contentDiv.appendChild(something1Div);
}