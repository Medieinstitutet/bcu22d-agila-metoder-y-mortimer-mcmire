import createFarms from "./modules/farms.js";
import createFiat from "./modules/fiat.js";
import createNft from "./modules/nft.js";
// import createPlaceholder1 from "./modules/placeholder1.js";
// import createPlaceholder2 from "./modules/placeholder2.js";
import nftTop from "./nftTop.js";
import createTopmovers from "./modules/topmovers.js";
import createWallet from "./modules/wallet.js";

export default function homePage() {
    createWallet();
    createFiat();
    createNft();
    // createPlaceholder1();
    // createPlaceholder2();
    nftTop();
    createFarms();
    createTopmovers();
}