export default function createFarms() {
    let contentDiv = document.getElementById("content");
    let farmDiv = document.createElement("div");
    farmDiv.classList.add("gridDiv");
    farmDiv.innerHTML = `<h2>Yield farms</h2>
    Ether :<br>
    Link to farm<br>
    Link to farm<br>
    Link to farm<br>
    Link to farm<br>
    Tether :<br>
    Link to farm<br>
    Link to farm<br>
    Link to farm<br>
    Chainlink :<br>
    Link to farm<br>
    Link to farm<br>
    Link to farm<br>`;
    farmDiv.style.gridArea = "farms";
    contentDiv.appendChild(farmDiv);
}