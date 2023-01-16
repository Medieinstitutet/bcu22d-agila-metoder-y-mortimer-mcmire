import { erc20AbiJson } from "./erc20AbiJson.js";
import { account } from "./header.js";
import { walletDiv } from "./modules/createWallet.js";
const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

//console.log("erc20AbiJson", erc20AbiJson);


export default async function tokenBalances() {
    const tokenAddresses = {
        "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2": "WETH",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7": "USDT",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48": "USDC",
        "0x75231F58b43240C9718Dd58B4967c5114342a86c": "OKB",
        "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84": "stETH",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F": "DAI",
        "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE": "SHIB",
        "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984": "UNI",
        "0x2AF5D2aD76741191D15Dfe7bF6aC92d4Bd912Ca3": "LEO",
        "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599": "WBTC",
        "0x0000000000A39bb272e79075ade125fd351887Ac": "ETHBlur", //ETH in Blur Pool
        "0xE41d2489571d322189246DaFA5ebDe1F4699F498": "ZRX"
    };


    ethereum.request({ method: 'eth_getBalance', params: [account, 'latest'] }).then(result => {
        console.log("result", result);
        let wei = parseInt(result, 16);
        let balance = wei / (10 ** 18);
        console.log("Balance in ETH", balance);
        walletDiv.innerHTML = `<h2>Wallet</h2>
        Ether : ${balance.toFixed(4)}<br>`;
    });


    for (let tokenAddress in tokenAddresses) {
        const contract = new web3.eth.Contract(erc20AbiJson, tokenAddress);
        const tokenBalance = await contract.methods.balanceOf(account).call();
        if (tokenBalance > 0) {
            let formattedToken = 0;
            switch (tokenAddress) {
                case "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599":
                    formattedToken = tokenBalance / 100000000;
                    localStorage.setItem(tokenAddresses[tokenAddress], formattedToken);
                    walletDiv.insertAdjacentHTML("beforeend", `WBTC: ${formattedToken}<br>`);
                    break;
                case "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2":
                    formattedToken = tokenBalance / (10 ** 18);
                    localStorage.setItem(tokenAddresses[tokenAddress], formattedToken);
                    walletDiv.insertAdjacentHTML("beforeend", `WETH: ${formattedToken}<br>`);
                    break;
                case "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84":
                    formattedToken = tokenBalance / (10 ** 18);
                    localStorage.setItem(tokenAddresses[tokenAddress], formattedToken);
                    walletDiv.insertAdjacentHTML("beforeend", `stETH: ${formattedToken}<br>`);
                    break;
                case "0xdAC17F958D2ee523a2206206994597C13D831ec7":
                    formattedToken = tokenBalance / 1000000;
                    localStorage.setItem(tokenAddresses[tokenAddress], formattedToken);
                    walletDiv.insertAdjacentHTML("beforeend", `USDT: ${formattedToken}<br>`);
                    break;
                case "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48":
                    formattedToken = tokenBalance / 1000000;
                    localStorage.setItem(tokenAddresses[tokenAddress], formattedToken);
                    walletDiv.insertAdjacentHTML("beforeend", `USDC: ${formattedToken}<br>`);
                    break;
                case "0x75231F58b43240C9718Dd58B4967c5114342a86c":
                    formattedToken = tokenBalance / (10 ** 18);
                    localStorage.setItem(tokenAddresses[tokenAddress], formattedToken);
                    walletDiv.insertAdjacentHTML("beforeend", `OKB: ${formattedToken}<br>`);
                    break;
                case "0x6B175474E89094C44Da98b954EedeAC495271d0F":
                    formattedToken = tokenBalance / (10 ** 18);
                    localStorage.setItem(tokenAddresses[tokenAddress], formattedToken);
                    walletDiv.insertAdjacentHTML("beforeend", `DAI: ${formattedToken}<br>`);
                    break;
                case "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE":
                    formattedToken = tokenBalance / (10 ** 18);
                    localStorage.setItem(tokenAddresses[tokenAddress], formattedToken);
                    walletDiv.insertAdjacentHTML("beforeend", `SHIB: ${formattedToken}<br>`);
                    break;
                case "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984":
                    formattedToken = tokenBalance / (10 ** 18);
                    localStorage.setItem(tokenAddresses[tokenAddress], formattedToken);
                    walletDiv.insertAdjacentHTML("beforeend", `UNI: ${formattedToken}<br>`);
                    break;
                case "0x2AF5D2aD76741191D15Dfe7bF6aC92d4Bd912Ca3":
                    formattedToken = tokenBalance / (10 ** 18);
                    localStorage.setItem(tokenAddresses[tokenAddress], formattedToken);
                    walletDiv.insertAdjacentHTML("beforeend", `LEO: ${formattedToken}<br>`);
                    break;
                case "0xE41d2489571d322189246DaFA5ebDe1F4699F498":
                    formattedToken = tokenBalance / (10 ** 18);
                    localStorage.setItem(tokenAddresses[tokenAddress], formattedToken);
                    walletDiv.insertAdjacentHTML("beforeend", `ZRX: ${formattedToken}<br>`);
                    break;
                case "0x0000000000A39bb272e79075ade125fd351887Ac":
                    formattedToken = tokenBalance / (10 ** 18);
                    localStorage.setItem(tokenAddresses[tokenAddress], formattedToken);
                    walletDiv.insertAdjacentHTML("beforeend", `ETH in Blur Pool: ${formattedToken}<br>`);
            }
        }
    }
}