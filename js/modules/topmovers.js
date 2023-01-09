export default function createTopmovers() {
    let contentDiv = document.getElementById("content");
    let topmoveDiv = document.createElement("div");
    topmoveDiv.classList.add("gridDiv");
    topmoveDiv.innerHTML = `<h2>Top movers</h2>
    Ether : +5%<br>
    Tether : +5%<br>
    Chainlink : +5%`;
    topmoveDiv.style.gridArea = "topmove";
    contentDiv.appendChild(topmoveDiv);
}