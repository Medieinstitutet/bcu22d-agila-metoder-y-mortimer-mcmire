export default function createNft() {
    let contentDiv = document.getElementById("content");
    let nftDiv = document.createElement("div");
    nftDiv.classList.add("gridDiv");
    nftDiv.innerHTML = `<h2>Held NFTs</h2>
    NFT info and images`;
    nftDiv.style.gridArea = "nft";
    contentDiv.appendChild(nftDiv);
}