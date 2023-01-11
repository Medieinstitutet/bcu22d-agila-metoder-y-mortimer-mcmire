import {account} from "./header.js";

export default async function main() {

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'f1544a0c-613b-423c-a5c6-473e711ce9da'
    }
  };

  await fetch('https://api.nftport.xyz/v0/accounts/' + account + '?chain=ethereum&page_size=50&include=metadata', options)
    .then(response => response.json())
    .then(data => {
      console.log()
      let imageHTML = '';
      for (const nft of data.nfts) {
        if(nft.metadata){
          let imageUrl = nft.metadata.image || "default image";
          if(imageUrl.includes("ipfs://")) {
            const ipfsHash = imageUrl.split("ipfs://")[1]
            imageUrl = `https://ipfs.io/ipfs/${ipfsHash}`
            console.log(imageUrl)
          }
          imageHTML += `<img src="${imageUrl}" style="width: 300px; height: auto;">`;

        }
      }
      let contentDiv = document.getElementById("content");
      let nftDiv = document.createElement("div");
      nftDiv.classList.add("gridDiv");
      nftDiv.innerHTML += imageHTML;
      nftDiv.style.gridArea = "nft";
      contentDiv.appendChild(nftDiv);
      
    });
}