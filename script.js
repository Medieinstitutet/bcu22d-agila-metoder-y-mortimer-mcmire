import homePage from "./homePage.js";
import header, { account } from "./header.js";

const content = document.getElementById("content");
document.body.appendChild(content);


header();
homePage();