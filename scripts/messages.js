
const listOfCommands = 
`whois
    -- Print Username
about
    -- A Litte Bit About Me
date
    -- Print Current Date
github
    -- Takes You To My Github
linkedin
    -- Takes You To My Linkedin`

const date = new Date();
const aboutMe = `FullStack Web Developer\nExpert At : 
> React
> NodeJs
> Vanilla JS`

export default {
    ls:listOfCommands,
    help:listOfCommands,
    list:listOfCommands,
    about: aboutMe,
    date: date,
}



