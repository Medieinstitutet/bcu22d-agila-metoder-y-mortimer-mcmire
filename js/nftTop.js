export default function nftTop() {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'f1544a0c-613b-423c-a5c6-473e711ce9da'
        }
      };
      
      fetch('https://api.nftport.xyz/v0/contracts/top?page_size=5&page_number=1&period=24h&order_by=volume&chain=ethereum&chain=polygon', options)
        .then(response => response.json())
        .then(response => {
          const nftData = response.contracts.map(nft => {
            return {
              name: nft.name,
              thumbnail_image: nft.metadata.thumbnail_url
            };
          });
  
          let contentDiv = document.getElementById("content");
          let something1Div = document.createElement("div");
          something1Div.classList.add("gridDiv");
          something1Div.style.gridArea = "free1";
          contentDiv.appendChild(something1Div);
  
          let title = document.createElement("h2");
          title.innerText = "Top selling NFT-collections";
          something1Div.appendChild(title);
  
          for (let i = 0; i < nftData.length; i++) {
              let nft = nftData[i];
              let div = document.createElement("div");
              div.innerHTML = `<br> ${i+1}. ${nft.name} <br> <img src="${nft.thumbnail_image}" width = "100px" height = "auto"/> `;
              something1Div.appendChild(div);
          }
        
        })
        .catch(err => console.error(err));
    }
    
