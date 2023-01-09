export default function createWallet() {
    let contentDiv = document.getElementById("content");
    let walletDiv = document.createElement("div");
    walletDiv.classList.add("gridDiv");
    walletDiv.innerHTML = `<h2>Wallet</h2>
Ether : 0.1<br>
Tether : 24<br>
Chainlink : 0.02`;
    walletDiv.style.gridArea = "wallet";
    contentDiv.appendChild(walletDiv);
}