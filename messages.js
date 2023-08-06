
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
    -- Takes You To My Linkedin
long shit long shit long shit long shit long shit smash`
export default {
    ls:listOfCommands,
    help:listOfCommands,
    list:listOfCommands,
    about: `FullStack Web Developer\nExpert At : 
> React
> NodeJs
> Vanilla JS`,
    date: `${new Date()}`,
    
}



