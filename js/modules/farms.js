import farmList from "./farmList.js";


export default function createFarms() {
    let contentDiv = document.getElementById("content");
    let farmDiv = document.createElement("div");
    farmDiv.id = "farmDiv";
    farmDiv.classList.add("gridDiv");

    let chooseCurrency = document.createElement("h1");
    chooseCurrency.id = "chooseCurrency";
    chooseCurrency.innerText = "Find Yield farms!";
    farmDiv.appendChild(chooseCurrency);

    var select = document.createElement("select");
    select.id = "dropDownToken";
    farmDiv.appendChild(select);
    var getPost = async () => {
        var response = await fetch("https://api.ethplorer.io/getTop?apiKey=freekey&criteria=cap");
        console.log(response);
        var data = response.json();
        const fred = data;
        console.log()
        return data;
    };

    const displayOption = async () => {
        const options = await getPost();
        console.log(options);
        options.tokens.forEach(option => {
    
            const newOption = document.createElement("option");
            console.log(option);
            newOption.value = option.name;
            newOption.text = option.name;
            select.appendChild(newOption);
            
        });
    };
    displayOption();

    let searchBtn = document.createElement("button");
    searchBtn.id = "searchBtn";
    searchBtn.innerText = "Search"
    farmDiv.appendChild(searchBtn);

    const iconDiv = document.createElement("div");
    iconDiv.id = "iconDiv";
    farmDiv.appendChild(iconDiv);

    searchBtn.addEventListener("click", () =>{
        farmList()
    })

    farmDiv.style.gridArea = "farms";
    contentDiv.appendChild(farmDiv);
}

    