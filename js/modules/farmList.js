export default function farmList(){

let select = document.getElementById("dropDownToken");
    
    switch (select.value){
        case "Ethereum":
            iconDiv.innerHTML = 
            `<ul>
            <li> <a href ="http://Uniswap.com/"
            target="_blank">Uniswap</a><li> 
            <a href ="http://aave.com/"
            target="_blank">Avve</a><li>
            <a href ="http://sushiswap.com/"
            target="_blank">Sushiswap</a><li>
            <a href ="http://curve.com/"
            target="_blank">Curve</a><li>
            <a href ="https://www.akropolis.io/app/home/"
            target="_blank">Akropolis</a><li>
            <a href ="https://homora-v2.alphaventuredao.io/"
            target="_blank">Homora</a><li>
            <a href ="https://www.arrakis.finance/"
            target="_blank">Arrakis</a><li>
            <a href ="https://app.badger.com/?chain=ethereum"
            target="_blank">Badger</a><br>
            </ul>`;
            break;
        case "Tether USD": 
            iconDiv.innerHTML = 
            `<ul>
            <li><a href ="http://aave.com/"
            target="_blank">Avve</a><li>
            <a href ="http://compound.finance/"
            target="_blank">Compound </a><li>
            <a href ="http://makerdao.com/"
            target="_blank">MakerDAO</a><li>
            <a href ="http://dydx.exchange/"
            target="_blank">dYdX</a><li>
            <a href ="http://bancor.network/"
            target="_blank">Bancor</a><br>
            <ul/>`;
            break;
        case "USD Coin": 
            iconDiv.innerHTML = 
            `<ul>
            <li><a href ="http://Uniswap.com/"
            target="_blank">Uniswap</a><br>
            </ul>`;
            break;
        case "Binance Coin":
            iconDiv.innerHTML = 
            `<ul>
            <li><a href ="https://homora-v2.alphaventuredao.io/"
            target="_blank">Homora</a><li>
            <a href ="https://frfi.io/pools"
            target="_blank">FairFi</a><li>
            <a href ="https://tokensfarm.com/"
            target="_blank">TokenFarm</a><li>
            <a href ="https://app.jelly.io/farms/0xcC43331067234a0014d298b5226A1c22cb0ac66a"
            target="_blank">Jelly</a><br></br>
            </ul>`;     
            break;
        case "Binance USD": 
            iconDiv.innerHTML = 
            `<ul>
            <li><a href ="http://Uniswap.com/"
            target="_blank">Uniswap</a><br>
            </ul>`;
            break;
        case "Matic Network": 
            iconDiv.innerHTML = 
            `<ul>
            <li><a href ="https://defisaver.com/"
            target="_blank">DeFi Saver</a><li>
            <a href ="https://www.aavegotchi.com/"
            target="_blank">Aavegotchi</a><li>
            <a href ="http://dydx.exchange/"
            target="_blank">dYdX</a><br>
            </ul>`;
            break;
        case "Dai": 
            iconDiv.innerHTML = 
            `<ul>
            <li><a href ="http://Uniswap.com/"
            target="_blank">Uniswap</a><li>
            <a href ="http://compound.finance/"
            target="_blank">Compound </a><li>
            <a href ="http://aave.com/"
            target="_blank">Avve</a><li>
            <a href ="https://daostack.io/"
            target="_blank">DAOStack</a><li>
            <a href ="https://oasis.app/#earn/"
            target="_blank">MakerDAO</a><br>
            </ul>`;
            break;      
        case "Shiba Inu": 
            iconDiv.innerHTML = 
            `<ul>
            <a href ="https://dappradar.com/"
            target="_blank">Dapprader</a><li>
            <a href ="http://Uniswap.com/"
            target="_blank">Uniswap</a><li>
            <a href ="http://compound.finance/"
            target="_blank">Compound </a><li>
            <a href ="http://bancor.network/"
            target="_blank">Bancor</a><br>
            </ul>`;
            break;      
        case "Lido Staked Ether": 
            iconDiv.innerHTML = 
            ``;
            break;  
        case "Uniswap": 
            iconDiv.innerHTML = 
            `<ul>
            <li><a href ="http://Uniswap.com/"
            target="_blank">Uniswap</a><br>
            </ul>`;
            break;           
    }
}
