import createWallet from "./modules/createWallet.js";
import tokenBalances from "./tokenBalances.js";
import { walletDiv } from "./modules/createWallet.js";
import nftImage from "./nftImage.js";
import nftTop from "./nftTop.js";

export let account = "";


export default function header() {
    const header = document.getElementById("header");

    const homeBtn = document.createElement("button");
    homeBtn.id = "homeBtn";
    homeBtn.className = "buttons";
    homeBtn.innerText = "HOME";
    header.appendChild(homeBtn);

    const metaBtn = document.createElement("button");
    metaBtn.id = "metaBtn";
    metaBtn.className = "buttons";
    metaBtn.innerText = "SIGN IN WITH META MASK";
    header.appendChild(metaBtn);

    homeBtn.addEventListener("click", () => {
        document.location.reload()
    })

    //Sign in meta mask 
    document.getElementById('metaBtn').addEventListener('click', event => {
        let account;
        let button = event.target;
        ethereum.request({ method: 'eth_requestAccounts' }).then(accounts => {
            account = accounts[0];
            console.log("connected account", account);
            button.textContent = account;
            tokenBalances();
            createFiat();
        });

    });
}