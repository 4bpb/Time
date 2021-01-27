var log = require('./logger')
let ts = Date.now();
let date_ob = new Date(ts);
var options = { weekday: 'long'};
const Discord = require('discord.js');
const hook = new Discord.WebhookClient('', '');

function start(){
    log('Script Started','',false)
}


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
      log('First Webhook Sent','ok',false)
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
      log('Second Webhook Sent','ok',false)
}





function logActualTime() {
    let time = new Date().toISOString().match(/(\d{2}:){2}\d{2}/)[0]
    let day = new Intl.DateTimeFormat('en-US', options).format(date_ob)
    log('Current Time and Date are : '+day+' - '+time,'info',false)
    if(time==='09:45:00'&day==='Thursday'){
        toDiscord()
    } 
    if(time==='12:45:00'&day==='Thursday'){
        toDiscordd()
    }
}
start()
setInterval(logActualTime, 1000)