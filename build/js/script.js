import messages from "./messages.js";
const username = "Ram";
const prompt = `${username}@Arch $ ~ `;
const inputBox = document.querySelector("input");
const command = document.querySelector(".command");
const history = document.querySelector(".history");
const screen = document.querySelector("pre");
document.querySelector(".username").textContent = prompt;
const validCommands = [
    "help",
    "ls",
    "list",
    "about",
    "clear",
    "date",
    "socials",
    "projects",
    "neofetch",
    "theme",
    "art",
    "quote",
    "rock",
    "paper",
    "scissors"
];
export function print(text, color = "white", type = "h1", dest = "#") {
    const lines = text.split("\n");
    const element = document.createElement(type);
    element.classList.add(color);
    if (lightMode) {
        element.classList.add("lightMode");
    }
    if (type === "a") {
        element.setAttribute("target", "_blank");
        element.setAttribute("href", dest);
    }
    history.appendChild(element);
    function lineByLine(index) {
        if (index >= lines.length)
            return;
        element.textContent += lines[index] + "\n";
        screen.scrollTop = screen.scrollHeight; //keeps the pages scrolled all the way down
        setTimeout(() => { lineByLine(index + 1); }, 50);
    }
    lineByLine(0);
}
inputBox.addEventListener("input", updatePrompt);
inputBox.addEventListener("keydown", enterCommand);
function checkCommand(cmd) {
    cmd = cmd.toLowerCase().replace(/\s+/g, '');
    if (validCommands.includes(cmd))
        executeCommand(cmd);
    else
        print(`Bash : ${cmd} : Command Not Found `);
}
function updatePrompt() {
    screen.scrollTop = screen.scrollHeight; //keeps the pages scrolled all the way down
    const text = inputBox.value;
    command.textContent += text;
    inputBox.value = "";
}
function enterCommand(event) {
    switch (event.key) {
        case "Backspace":
            command.textContent = command.textContent.slice(0, -1);
            break;
        case "Enter":
            print(`${prompt}${command.textContent}`, "green");
            checkCommand(command.textContent);
            command.textContent = "";
            screen.scrollTop = screen.scrollHeight; //keeps the pages scrolled all the way down
            break;
    }
}
function executeCommand(cmd) {
    switch (cmd) {
        case "clear":
            history.innerHTML = "";
            break;
        case "socials":
            print("-> LeetCode", "white", "a", "https://leetcode.com/lRaml/");
            print("-> Github", "white", "a", "https://github.com/h-ram");
            print("-> LinkedIn", "white", "a", "https://www.linkedin.com/in/ram-h-337697281/");
            print("-> Youtube Channel", "white", "a", "https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D");
            break;
        case "projects":
            print("-> RamSH (this)", "white", "a", ".");
            print("-> RamOS", "white", "a", "https://h-ram.github.io/RamOS");
            print("-> Portfolio", "white", "a", "https://h-ram.github.io/portfolio/");
            break;
        case "theme":
            changeTheme();
            break;
        case "about":
            print(messages[cmd], "yellow");
            break;
        case "neofetch":
            print(messages[cmd], "cyan");
            break;
        case "art":
            let rng1 = Math.floor(Math.random() * messages['arts'].length);
            print(messages[`arts`][rng1], "white", "h4");
            break;
        case "quote":
            let rng2 = Math.floor(Math.random() * messages['quotes'].length);
            print(messages['quotes'][rng2], "cyan");
            break;
        case "rock":
        case "scissors":
        case "paper":
            let rng3 = Math.floor(Math.random() * 2);
            print(messages[cmd][rng3]);
            break;
        default:
            print(messages[cmd]);
            break;
    }
}
let lightMode = false;
function changeTheme() {
    const everything = document.querySelectorAll("*");
    everything.forEach((element) => {
        element.classList.toggle("lightMode");
    });
    lightMode = !lightMode;
}
//keep the focus on the input box
inputBox.addEventListener("blur", () => inputBox.focus());
window.onload = () => {
    // wait for loading screen to finish 
    setTimeout(() => {
        inputBox.focus(); //focus on inputBox when page is loaded
        print(messages["logo"], "yellow");
        print(messages["keyboard"], "yellow", "h6");
        print("type 'help' or 'ls' for list of commands");
    }, 5200);
};
