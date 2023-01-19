import { balance } from "../header.js";

export let walletDiv;

export default function createWallet() {
    let contentDiv = document.getElementById("content");
    walletDiv = document.createElement("div");
    walletDiv.classList.add("gridDiv");
    console.log("balance from wallet.js", balance);
    walletDiv.innerHTML = `<h2>Wallet</h2>
    Please sign in with Meta Mask`;
    walletDiv.style.gridArea = "wallet";
    contentDiv.appendChild(walletDiv);
}