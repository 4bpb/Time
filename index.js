var log = require('./logger')
let ts = Date.now();
let date_ob = new Date(ts);
var options = { weekday: 'long'};
const Discord = require('discord.js');


const hook = new Discord.WebhookClient('803042205392175167', 'gZmo9lGo70lkcY7saYNR9dycEAAx0tlZ3LPTsP8qTu0q7KGXpD-KjdrnPq5ScZ-HPH5T');
let day = new Intl.DateTimeFormat('en-US', options).format(date_ob)




//https://discord.com/api/webhooks/803042205392175167/gZmo9lGo70lkcY7saYNR9dycEAAx0tlZ3LPTsP8qTu0q7KGXpD-KjdrnPq5ScZ-HPH5T


function toDiscord(){

    let message = {
        "content": '<@&797243347814318130>',
        "embeds": [
          {
            "title": "ECON 200",
            "description": 'Links Below',
            "url": "https://d2l.arizona.edu/d2l/home/975755",
            "color": 9359851,
            "fields": [
              {
                "name": "11 AM Zoom Link",
                "value": "https://arizona.zoom.us/j/84978947316"
              },
              {
                "name": "2 PM Zoom Link",
                "value": "https://arizona.zoom.us/j/82494554212"
              }
            ],
            "footer": {
              "text": "Prof. Justin Jarvis"
            }
          }
        ],
        "username": "ECON",
        "avatar_url": "https://cdn.discordapp.com/attachments/614617658783957005/803054150949797898/CLUB_200_LOGO_DRAFT_3.png"
      }


      hook.send(message)
      console.log('test2')
}



function toDiscordd(){
    let message = {
        "content": '<@&797242984327413791>',
        "embeds": [
          {
            "title": "ECON 200",
            "description": 'Links Below',
            "url": "https://d2l.arizona.edu/d2l/home/975755",
            "color": 9359851,
            "fields": [
              {
                "name": "11 AM Zoom Link",
                "value": "https://arizona.zoom.us/j/84978947316"
              },
              {
                "name": "2 PM Zoom Link",
                "value": "https://arizona.zoom.us/j/82494554212"
              }
            ],
            "footer": {
              "text": "Prof. Justin Jarvis"
            }
          }
        ],
        "username": "ECON",
        "avatar_url": "https://cdn.discordapp.com/attachments/614617658783957005/803054150949797898/CLUB_200_LOGO_DRAFT_3.png"
      }


      hook.send(message)
}



function alert(day){

    let x = 0
    let y = 0
    
    
    while(1>0){

        let time = new Date().toISOString().match(/(\d{2}:){2}\d{2}/)[0]
        if(day==='Sunday'){
            toDiscord()
            console.log('1')
            x++
        }
        if(day==='Sunday'){
            toDiscordd()
            console.log('2')
            y++
        }
        if(x===1&&y===1){
            process.exit()
        }
        
    }
}

alert(day)

