export default function removeHomePageBeforeLogin() {
    let contentDiv = document.getElementById("content");
    let welcomeText = document.getElementById("welcomeText");
    contentDiv.removeChild(welcomeText);
}