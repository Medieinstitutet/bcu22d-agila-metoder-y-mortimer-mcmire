import homePage from "./homePage.js";
import header from "./header.js";
import homePageBeforeLogin from "./modules/homePageBeforeLogin.js";

const content = document.getElementById("content");
document.body.appendChild(content);

header();
// homePage();
homePageBeforeLogin();