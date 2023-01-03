const herosBody = document.getElementById("herosBody");
let lars = document.getElementById("lars");
let kristoffer = document.getElementById("kristoffer");
let emelie = document.getElementById("emelie");
let fredrik = document.getElementById("fredrik");
const homeBtn = document.getElementById("homeBtn");

lars.addEventListener("click", ()=>{
  herosBody.remove();
})

kristoffer.addEventListener("click", ()=>{
  herosBody.remove();
})

emelie.addEventListener("click", ()=>{
  herosBody.remove();
})

fredrik.addEventListener("click", ()=>{
  herosBody.remove();
})

homeBtn.addEventListener("click", ()=>{
  document.location.reload()
})


//Sign in meta mask 
document.getElementById('metaBtn').addEventListener('click', event => {
    let account;
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