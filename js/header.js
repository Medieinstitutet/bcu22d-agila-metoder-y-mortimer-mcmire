import createWallet from "./modules/wallet.js";
import tokenBalances from "./tokenBalances.js";
import { walletDiv } from "./modules/wallet.js";

export let account = "";
export let balance;

export default function header(){
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

    homeBtn.addEventListener("click", ()=>{
        document.location.reload()
    })

    //Sign in meta mask 
    document.getElementById('metaBtn').addEventListener('click', event => {
        // let account;
        let button = event.target;
        ethereum.request({method: 'eth_requestAccounts'}).then(accounts => {
            account = accounts[0];
            console.log("connected account", account);
            button.textContent = account;

            ethereum.request({method: 'eth_getBalance', params: [account, 'latest']}).then(result => {
                console.log("result", result);
                let wei = parseInt(result,16);
                balance = wei / (10**18);
                console.log("Balance in ETH", balance);
                walletDiv.innerHTML = `<h2>Wallet</h2>
                Ether : ${balance.toFixed(4)}<br>`;
            });
            
            tokenBalances();
        });
        
    });
}