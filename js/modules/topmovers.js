import createTopFiveMovers from "./createTopFiveMovers.js";
import createBottomFiveMovers from "./createBottomFiveMovers.js";

export default async function createTopmovers() {
    let contentDiv = document.getElementById("content");
    let topmoveDiv = document.createElement("div");
    let topFiveMovers = await createTopFiveMovers();
    let bottomFiveMovers = await createBottomFiveMovers();
    topmoveDiv.classList.add("gridDiv");
    topmoveDiv.innerHTML = `<h2>Top movers - 24h</h2>`;
    topmoveDiv.style.textAlign = "center";
    // Ether : +5%<br>
    // Tether : +5%<br>
    // Chainlink : +5%`;
    topmoveDiv.style.gridArea = "topmove";
    contentDiv.appendChild(topmoveDiv);
    topmoveDiv.appendChild(topFiveMovers);
    topmoveDiv.appendChild(bottomFiveMovers);
}