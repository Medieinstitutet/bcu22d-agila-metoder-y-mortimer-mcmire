import fiatCalculator from "../fiatCalculator.js";
import { walletDiv } from "./wallet.js";
export let coinList;
// import { coinList } from "./coinGeckoCoinList.js";

export default async function createFiat() {


    let contentDiv = document.getElementById("content");
    let fiatDiv = document.createElement("div");
    fiatDiv.classList.add("gridDiv");
    fiatDiv.innerHTML = `<h2>Fiat values</h2>
    Please sign in with Meta Mask`;
    fiatDiv.style.gridArea = "fiat";
    contentDiv.appendChild(fiatDiv);

    let coinListURL = `https://api.coingecko.com/api/v3/coins/list`;
    coinList = await fetch(coinListURL)
        .then(res => res.json())
        .then(data => {
            return data
        })
        .catch(err => console.log(err));
    // console.log("First coinList", coinList[0])
    let fiatValues = {};
    let checkForTokens = setInterval(() => {
        // console.log(walletDiv.innerHTML);
        // console.log(walletDiv.innerHTML.indexOf("Meta Mask"));
        let walletInner = walletDiv.innerHTML;
        if (walletInner.indexOf("Meta Mask") < 0) {
            fiatDiv.innerHTML = `<h2>Fiat values</h2>`;
            // console.log("=============updating fiat=============");
            // console.log(walletInner.substring(0, 1));
            // console.log(walletInner.slice(walletInner.indexOf("Ether: ")))
            let walletString = walletInner.slice(walletInner.indexOf("Ether: "), -4);
            // console.log(walletString);
            //console.log(`${walletString.match(/<br>/g).length} tokens present in wallet`)
            let tokenArray = walletString.split("<br>")
            //console.log(tokenArray);
            for (let i = 0; i < tokenArray.length; i++) {
                //console.log(tokenArray[i])
                let tokenSymbol = tokenArray[i].slice(0, tokenArray[i].indexOf(": "));
                tokenSymbol = tokenSymbol.toLowerCase();
                if (tokenSymbol == "ether") {
                    tokenSymbol = "eth"
                }
                //console.log(`Token Symbol: ${tokenSymbol}`);
                let tokenAmount = tokenArray[i].slice(tokenArray[i].indexOf(": ") + 2);
                //console.log(`Token Amount: ${tokenAmount}`);
                //let fiatValue = fiatCalculator(tokenSymbol, tokenAmount, "sek");
                if (fiatValues[tokenSymbol] === undefined) {
                    // console.log("Not found", tokenSymbol);
                    if (!localStorage.getItem(tokenSymbol + "sek")) {
                        if (tokenAmount > 0) {
                            fiatCalculator(tokenSymbol.toLowerCase(), tokenAmount, "sek");
                            //console.log("time to check", tokenSymbol);
                            //localStorage.setItem(tokenSymbol + "sek", "started");
                        }
                        else {
                            fiatValues[tokenSymbol] = 0;
                            localStorage.setItem(tokenSymbol + "sek", 0);
                        }
                    }
                    else {
                        let localStorageValue = localStorage.getItem(tokenSymbol + "sek");
                        if (localStorageValue != "started") {
                            fiatValues[tokenSymbol] = Math.floor(localStorageValue);
                        }
                    }
                    //console.log("Added", tokenSymbol, fiatValues[tokenSymbol]);
                }
                else {
                    fiatDiv.innerHTML += `${tokenSymbol}: ${fiatValues[tokenSymbol]} sek<br>`;
                }
                // else {
                //     console.log("fiatValues", fiatValues);
                //     console.log("fiatValues.length", fiatValues.length);
                //     for (let i = 0; i < fiatValues.length; i++) {
                //         console.log(fiatValues[i]);
                //         console.log("Adding", `<br>${tokenSymbol}: ${fiatValues[tokenSymbol]} sek`)
                //         fiatDiv.innerHTML += `<br>${tokenSymbol}: ${fiatValues[tokenSymbol]} sek`;
                //     }
                // }
            }

        }
        //let test = await fiatCalculator(tokenSymbol, tokenAmount, "sek");
    }, 200);
}

//<div class="gridDiv" style="grid-area: wallet / wallet / wallet / wallet;"><h2>Wallet</h2>
//Ether: 0.0000<br>ZRX: 12.61324052<br></div>