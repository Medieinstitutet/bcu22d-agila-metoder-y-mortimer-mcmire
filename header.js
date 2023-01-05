// import web3 from "../node_modules/web3";
// const web3 = require('web3');
// const web3Instance = new web3();

import { erc20AbiJson } from "./erc20AbiJson.js";

export default async function header(){
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

    let account;
   
    //Sign in meta mask 
    document.getElementById('metaBtn').addEventListener('click', event => {
        let button = event.target;
        ethereum.request({method: 'eth_requestAccounts'}).then(accounts => {
            account = accounts[0];
            console.log("connected account", account);
            button.textContent = account;

            ethereum.request({method: 'eth_getBalance', params: [account, 'latest']}).then(result => {
                console.log("result", result);
                let wei = parseInt(result,16);
                let balance = wei / (10**18);
                console.log("Balance in ETH", balance);
                let balanceElement = document.createElement("p");
                document.body.appendChild(balanceElement);
                balanceElement.innerHTML = 'Your balance ETH-balance is: ' + balance.toFixed(4);
            });
        });
    });

    const tokenAddresses = [
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    ];
    
    for (let tokenAddress of tokenAddresses) {
        console.log("aaaaaaaaaa");
        const web3 = new Web3("http://localhost:5500").eth;
        console.log(web3);
        const contract = new web3.Contract(erc20AbiJson, tokenAddress);
        const tokenBalance = await contract.methods.balanceOf(account).call();
        console.log("contract och tokenBalance", contract, tokenBalance);
    }
}