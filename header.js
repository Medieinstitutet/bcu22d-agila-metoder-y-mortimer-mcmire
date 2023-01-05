// const web3 = require('web3');
// const web3Instance = new web3();
// const Web3 = require("web3");
// const web3 = new Web3("https://mainnet.infura.io/v3/0954248fee3d4481a4b828bd4f07aab5");
// import web3 from "web3";
const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
// import showTokenBalances from "./tokenBalances.js";




import { erc20AbiJson } from "./erc20AbiJson.js";

console.log("erc20AbiJson", erc20AbiJson);

// export let account;
export let account = "";

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
            listTokens();
        });
        
    });

    async function listTokens() {
        const tokenAddresses = [
            "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", //WETH
            "0xdAC17F958D2ee523a2206206994597C13D831ec7", //USDT
            "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", //USDC
            "0x75231F58b43240C9718Dd58B4967c5114342a86c", //OKB 
            "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84", //stETH
            "0x6B175474E89094C44Da98b954EedeAC495271d0F", //DAI
            "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE", //SHIB
            "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984", //UNI
            "0x2AF5D2aD76741191D15Dfe7bF6aC92d4Bd912Ca3", //LEO
            "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599", //WBTC
        ];
        
        // console.log("account from listTokens", account);
        // const myAddress = account;
        
        
    
        for (let tokenAddress of tokenAddresses) {
            const contract = new web3.eth.Contract(erc20AbiJson, tokenAddress);
            // const tokenBalance = await contract.methods.balanceOf(myAddress).call();
            const tokenBalance = await contract.methods.balanceOf(account).call();
            if (tokenBalance > 0) {
                switch (tokenAddress) {
                    case "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599":
                        console.log("You have " + tokenBalance/100000000 + " WBTC in your wallet.");
                        break;
                    case "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2":
                        console.log("You have " + tokenBalance/(10**18) + " WETH in your wallet.");
                        break;
                    case "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84":
                        console.log("You have " + tokenBalance/(10**18) + " stETH in your wallet.");
                        break;
                    case "0xdAC17F958D2ee523a2206206994597C13D831ec7":
                        console.log("You have " + tokenBalance/1000000 + " USDT in your wallet.");
                        break;
                    case "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48":
                        console.log("You have " + tokenBalance/1000000 + " USDC in your wallet.");
                        break;
                    case "0x75231F58b43240C9718Dd58B4967c5114342a86c":
                        console.log("You have " + tokenBalance/(10**18) + " OKB in your wallet.");
                        break;
                    case "0x6B175474E89094C44Da98b954EedeAC495271d0F":
                        console.log("You have " + tokenBalance/(10**18) + " DAI in your wallet.");
                        break;
                    case "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE":
                        console.log("You have " + tokenBalance/(10**18) + " SHIB in your wallet.");
                        break;
                    case "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984":
                        console.log("You have " + tokenBalance/(10**18) + " UNI in your wallet.");
                        break;
                    case "0x2AF5D2aD76741191D15Dfe7bF6aC92d4Bd912Ca3":
                        console.log("You have " + tokenBalance/(10**18) + " LEO tokens in your wallet.");
                        break;
                }
            }
            
            
            
        }
    }

    // const tokenAddresses = [
    //     "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", //WETH
    //     "0xdAC17F958D2ee523a2206206994597C13D831ec7", //USDT
    //     "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", //USDC
    //     "0x75231F58b43240C9718Dd58B4967c5114342a86c", //OKB 
    //     "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84", //stETH
    //     "0x6B175474E89094C44Da98b954EedeAC495271d0F", //DAI
    //     "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE", //SHIB
    //     "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984", //UNI
    //     "0x2AF5D2aD76741191D15Dfe7bF6aC92d4Bd912Ca3", //LEO
    //     "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599", //WBTC
    // ];

    // const myAddress = "0x2aCf35C9A3F4c5C3F4c78EF5Fb64c3EE82f07c45";
    

    // for (let tokenAddress of tokenAddresses) {
    //     const contract = new web3.eth.Contract(erc20AbiJson, tokenAddress);
    //     const tokenBalance = await contract.methods.balanceOf(myAddress).call();
    //     if (tokenBalance > 0) {
    //         console.log("tokenBalance", tokenBalance);
    //     }
    // }
      

    // for (let tokenAddress of tokenAddresses) {
    //     console.log("aaaaaaaaaa");
    //     const web3 = new Web3("http://localhost:5500").eth;
    //     console.log(web3);
    //     const contract = new web3.Contract(erc20AbiJson, tokenAddress);
    //     const tokenBalance = await contract.methods.balanceOf(account).call();
    //     console.log("contract och tokenBalance", contract, tokenBalance);
    // }
}