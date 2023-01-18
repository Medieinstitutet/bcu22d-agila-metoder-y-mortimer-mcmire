//If published publically, coingecko usage needs to be disclosed on site
//https://www.coingecko.com/en/branding
//For example, "Data provided by CoinGecko", "Data from CoinGecko" or "Powered by CoinGecko"
// import { coinList } from "./modules/coinGeckoCoinList.js";

//variable/function names needs to be rethought
export default async function fiatCalculator(symbol, amount, fiatSymbol) {
    // console.log("Start of fiatCalculator()");
    localStorage.setItem(symbol + fiatSymbol, "started")
    // console.log(`symbol: ${symbol}
    // amount: ${amount}
    // fiatSymbol: ${fiatSymbol}`);
    //Get coin amounts from connected wallet
    //Mock data
    // let walletValues = {
    //     shib: 100000,
    //     uni: 14,
    //     usdt: 30
    // };

    //This should be somewhere else later so that it's not called every time
    //Get list of coins from coin gecko


    //Go through coins in user wallet
    //for (let currency in walletValues) {
    //Find it in coin list
    let coinInfo = coinList.find(coin => {
        return coin.symbol == symbol;
    });
    // console.log("coinInfo", coinInfo);

    //Create link for getting coin-SEK exchange rate

    let coinURL = "https://api.coingecko.com/api/v3/simple/price";
    coinURL += `?ids=${coinInfo.id}&vs_currencies=${fiatSymbol}`;

    // Fetch exchange rate
    let coinExchangeData = await fetch(coinURL)
        .then(res => res.json())
        .then(data => {
            return data
        })
        .catch(err => console.log(err));
    // let coinExchangeData = { "0x": { "sek": 2.22 } }
    let coinExchange = coinExchangeData[coinInfo.id][fiatSymbol];

    // console.log(`====================`);
    // console.log(`1 ${coinInfo.name} is worth ${coinExchange} SEK`)
    //console.log(`${symbol}: ${walletValues[symbol]}`);
    let fiatValue = coinExchange * amount;
    // console.log(`Value in SEK: ${fiatValue}`);
    localStorage.setItem(symbol + fiatSymbol, fiatValue)
    //return fiatValue;
    //}
}