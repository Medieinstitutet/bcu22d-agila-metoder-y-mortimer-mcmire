export default function homePageBeforeLogin() {
    let contentDiv = document.getElementById("content");
    let welcomeText = document.createElement("div");
    welcomeText.id = "welcomeText";
    welcomeText.innerHTML = `<h1>Welcome</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br>
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br>
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris<br> 
     nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in<br> 
     reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla<br> 
     pariatur. Excepteur sint occaecat cupidatat non proident, sunt in<br> 
     culpa qui officia deserunt mollit anim id est laborum.</p>`;
    contentDiv.appendChild(welcomeText);
}