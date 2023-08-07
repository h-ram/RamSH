import messages from "./messages.js"
const username="Ram"
const prompt = `${username}@Arch $ ~ `
const inputBox = document.querySelector("input");
const command = document.querySelector(".command")
const history = document.querySelector(".history")
document.querySelector(".username").textContent = prompt 

const validCommands = [
    "help",
    "ls",
    "list",
    "about",
    "clear",
    "whois",
    "date",
    "github",
    "linkedin"
]

export function print(text,color="white"){
    const lines = text.split("\n")
    const element = document.createElement("h1")
    element.classList.add(color)
    history.appendChild(element)
    function lineByLine(index){
        if(index >= lines.length) return
        element.textContent += lines[index] + "\n"
        document.documentElement.scrollTop = document.documentElement.scrollHeight; //keeps the pages scrolled all the way down
        setTimeout(()=>{lineByLine(index+1)},80)
    }
    lineByLine(0)
}



inputBox.addEventListener("input",updatePrompt)
inputBox.addEventListener("keydown",enterCommand)
function checkCommand(cmd){
    cmd = cmd.toLowerCase()
    if(validCommands.includes(cmd))
        executeCommand(cmd)
    else
        print(`Bash : ${cmd} : Command Not Found `)
}
function updatePrompt(){
    document.documentElement.scrollTop = document.documentElement.scrollHeight; //keeps the pages scrolled all the way down
    const text = inputBox.value;
    command.textContent += text 
    inputBox.value = ""
}
function enterCommand(event){
    switch(event.key){
        case "Backspace":
            command.textContent = command.textContent.slice(0,-1)
            break;
        case "Enter":
        print(`${prompt}${command.textContent}`,"green")
            checkCommand(command.textContent)
            command.textContent = ""
            document.documentElement.scrollTop = document.documentElement.scrollHeight; //keeps the pages scrolled all the way down
            break;
    }
}

function executeCommand(cmd){
    switch(cmd){
        case "linkedin":
        case "github":
            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
            break;
        case "whois":
            print(username)
            break;
        case "clear":
            history.innerHTML = ""
            break;
        default:
            print(messages[cmd])
            break;
    }
}


//These two lines keep the focus on the input box
window.onload = () => inputBox.focus() 
inputBox.addEventListener("blur",()=>inputBox.focus())