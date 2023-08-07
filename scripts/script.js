import messages from "./messages.js"
const username="Ram"
const prompt = `${username}@Arch $ ~ `
const inputBox = document.querySelector("input");
const command = document.querySelector(".command")
const history = document.querySelector(".history")
const screen = document.querySelector("pre")
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
    "linkedin",
    "leetcode",
    "socials",
    "projects",
    "neofetch",
    "exit"
]

export function print(text,color="white",type="h1",dest="#"){
    const lines = text.split("\n")
    const element = document.createElement(type)
    element.classList.add(color)
    if(type === "a"){
        element.setAttribute("target","_blank")
        element.setAttribute("href",dest)
    }
    history.appendChild(element)
    function lineByLine(index){
        if(index >= lines.length) return
        element.textContent += lines[index] + "\n"
        screen.scrollTop = screen.scrollHeight; //keeps the pages scrolled all the way down
        setTimeout(()=>{lineByLine(index+1)},50)
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
    screen.scrollTop = screen.scrollHeight; //keeps the pages scrolled all the way down
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
            screen.scrollTop = screen.scrollHeight; //keeps the pages scrolled all the way down
            break;
    }
}

function executeCommand(cmd){
    switch(cmd){
        case "linkedin":
            window.open("https://www.linkedin.com/in/ram-h-337697281/")
        case "github":
            window.open("https://github.com/lgriffithl")
            break;
        case "leetcode":
            window.open("https://leetcode.com/lRaml/")
            break;
        case "whois":
            print(username)
            break;
        case "clear":
            history.innerHTML = ""
            break;
        case "socials":
            print("-> LeetCode","white","a","https://leetcode.com/lRaml/")
            print("-> Youtube Channel","white","a","https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D")
            print("-> Github","white","a","https://github.com/lgriffithl")
            print("-> LinkedIn","white","a","https://www.linkedin.com/in/ram-h-337697281/")
            break;
        case "projects":
            print("-> Terminal Website (this)","white","a",".")
            print("-> Portfolio","white","a","https://lgriffithl.github.io/portfolio/")
            break;
        case "exit":
            window.close()
            break;
        default:
            print(messages[cmd])
            break;
    }
}


//keep the focus on the input box
inputBox.addEventListener("blur",()=>inputBox.focus())
window.onload = ()=> {
    inputBox.focus() //focus on inputBox when page is loaded
    print("type 'help' or 'ls' for list of commands")
}
