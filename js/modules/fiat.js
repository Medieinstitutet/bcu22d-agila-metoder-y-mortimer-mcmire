export default function createFiat() {
    let contentDiv = document.getElementById("content");
    let fiatDiv = document.createElement("div");
    fiatDiv.classList.add("gridDiv");
    fiatDiv.innerHTML = `<h2>Fiat values</h2>
    Ether : 10 SEK<br>
    Tether : 10 SEK<br>
    Chainlink : 10 SEK`;
    fiatDiv.style.gridArea = "fiat";
    contentDiv.appendChild(fiatDiv);
}