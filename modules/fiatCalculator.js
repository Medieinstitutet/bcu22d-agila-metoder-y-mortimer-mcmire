//If published publically, coingecko usage needs to be disclosed on site
//https://www.coingecko.com/en/branding
//For example, "Data provided by CoinGecko", "Data from CoinGecko" or "Powered by CoinGecko"

//variable/function names needs to be rethought
export default async function fiatCalculator() {
    console.log("Start of fiatCalculator()");
    //Get coin amounts from connected wallet
    //Mock data
    let walletValues = {
        shib: 100000,
        uni: 14,
        usdt: 30
    };

    //This should be somewhere else later so that it's not called every time
    //Get list of coins from coin gecko
    let coinListURL = `https://api.coingecko.com/api/v3/coins/list`;
    let coinList = await fetch(coinListURL)
        .then(res => res.json())
        .then(data => {
            return data
        })
        .catch(err => console.log(err));

    //Go through coins in user wallet
    for (let currency in walletValues) {
        //Find it in coin list
        let coinInfo = coinList.find(coin => {
            return coin.symbol == currency;
        });

        //Create link for getting coin-SEK exchange rate
        let coinURL = `https://api.coingecko.com/api/v3/simple/price?ids=${coinInfo.id}&vs_currencies=sek`;
        //Fetch exchange rate
        let coinExchangeData = await fetch(coinURL)
            .then(res => res.json())
            .then(data => {
                return data
            })
            .catch(err => console.log(err));
        let coinExchange = coinExchangeData[coinInfo.id].sek;

        console.log(`====================`);
        console.log(`1 ${coinInfo.name} is worth ${coinExchange} SEK`)
        console.log(`${currency}: ${walletValues[currency]}`);
        let sekValue = coinExchange * walletValues[currency];
        console.log(`Value in SEK: ${sekValue}`);
    }
}