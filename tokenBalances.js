const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
import { erc20AbiJson } from "./erc20AbiJson.js";
import { account } from "./header.js";
import header from "./header.js";


export default async function showTokenBalances() {
    console.log("erc20AbiJson", erc20AbiJson);

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

    const myAddress = account;


    for (let tokenAddress of tokenAddresses) {
        const contract = new web3.eth.Contract(erc20AbiJson, tokenAddress);
        const tokenBalance = await contract.methods.balanceOf(myAddress).call();
        if (tokenBalance > 0) {
            console.log("tokenBalance", tokenBalance);
        }
    }

}