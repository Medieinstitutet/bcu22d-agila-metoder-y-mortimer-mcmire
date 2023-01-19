export default function createPlaceholder2() {
    let contentDiv = document.getElementById("content");
    let something2Div = document.createElement("div");
    something2Div.classList.add("gridDiv");
    something2Div.innerHTML = `Something else`;
    something2Div.style.gridArea = "free2";
    contentDiv.appendChild(something2Div);
}