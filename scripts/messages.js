
const listOfCommands= 
`.-=~=-.                                                           .-=~=-.
(__  _)-._.-=-._.-=-._.-=-._.-=-._.-=-._.-=-._.-=-._.-=-._.-=-._.-(__  _)
( _ __)                                                           ( _ __)
(__  _)    neofetch -- Print System Info                          (__  _)
(_ ___)    about    -- About Me                                   (_ ___)
(__  _)    github   -- Takes You To My Github                     (__  _)
( _ __)    linkedin -- Takes You To My Linkedin                   ( _ __)
(__  _)    leetcode -- Takes You To My LeetCode                   (__  _)
(_ ___)                                                           (_ ___)
(__  _)                                                           (__  _)
( _ __)                                                           ( _ __)
(__  _)                                                           (__  _)
(_ ___)                                                           (_ ___)
(__  _)                                                           (__  _)
( _ __)                                                           ( _ __)
(__  _)                                                           (__  _)
(_ ___)                                                           (_ ___)
(__  _)                                                           (__  _)
( _ __)                                                           ( _ __)
(__  _)                                                           (__  _)
(__  _)                                                           (__  _)
(_ ___)-._.-=-._.-=-._.-=-._.-=-._.-=-._.-=-._.-=-._.-=-._.-=-._.-(_ ___)
\`-._.-'                                                                 \`-._.-'`
const cmd = 
`whois
    -- Print Username
about
    -- A Litte Bit About Me
date
    -- Print Current Date
github
    -- Takes You To My Github
linkedin
    -- Takes You To My Linkedin
clear
    -- Clears Terminal
neofetch 
    -- Print System Information
-----------------------------------------------------------------------`

const date = new Date();
const aboutMe =
` ____________________________
|  ________________________  |
| |                        | |
| |  FullStack Developer   | |
| |  Expert At :           | |
| |     > NodeJs           | | 
| |     > React            | | 
| |     > NextJs           | | 
| |     > Vanilla JS       | |
| |                        | |
| |________________________| |
|____________________________|`

let browserName;
const userAgent = navigator.userAgent;
if (userAgent.includes('Firefox')) {
  browserName = 'Mozilla Firefox';
} else if (userAgent.includes('Chrome')) {
  browserName = 'Google Chrome';
} else if (userAgent.includes('Safari')) {
  browserName = 'Apple Safari';
} else if (userAgent.includes('Edge')) {
  browserName = 'Microsoft Edge';
} else if (userAgent.includes('Opera') || userAgent.includes('OPR')) {
  browserName = 'Opera';
} else if (userAgent.includes('Trident') || userAgent.includes('MSIE')) {
  browserName = 'Internet Explorer';
} else {
  browserName = 'Unknown Browser';
}
const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const isTabletDevice = /Tablet|iPad/i.test(navigator.userAgent);
let deviceType;
if (isMobileDevice) {
  deviceType = 'Mobile'
} else if (isTabletDevice) {
    deviceType = 'Tablet'
} else {
  deviceType = 'Desktop'
}
const neofetch = 
`                   -\`                    ram@RamArch 
                  .o+\`                   ----------- 
                 \`ooo/                   OS: ${navigator.platform} 
                \`+oooo:                  Type : ${deviceType} 
               \`+oooooo:                 Browser : ${browserName} 
               -+oooooo+:                Date : ${date.toLocaleString()} 
             \`/:-:++oooo+:               Language: ${navigator.language} 
            \`/++++/+++++++:              Shell: bash 5.1.16 
           \`/++++++++++++++:             Resolution: ${window.screen.width}x${window.screen.height}
          \`/+++ooooooooooooo/\`           WM: xmonad 
         ./ooosssso++osssssso+\`          Theme: Adwaita [GTK2/3] 
        .oossssso-\`\`\`\`/ossssss+\`         Icons: Adwaita [GTK2/3] 
       -osssssso.      :ssssssso.        Terminal: yakuake 
      :osssssss/        osssso+++.       
     /ossssssss/        +ssssooo/-       
   \`/ossssso+/:-        -:/+osssso+-     
  \`+sso+:-\`                 \`.-/+oso:
 \`++:.                           \`-/+/                           
 .\`                                 \`/                           
`



export default {
    ls:listOfCommands,
    help:listOfCommands,
    list:listOfCommands,
    about: aboutMe,
    date: date.toLocaleString(),
    neofetch:neofetch
}



