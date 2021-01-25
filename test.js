
let ts = Date.now();
let date_ob = new Date(ts);
var options = { weekday: 'long'};

let time = new Date().toISOString().match(/(\d{2}:){2}\d{2}/)[0]
let day = new Intl.DateTimeFormat('en-US', options).format(date_ob)
console.log(time+ day)



function alert(day){

    let x = 0
    let y = 0
    
    
    while(1>0){
        let time = new Date().toISOString().match(/(\d{2}:){2}\d{2}/)[0]
        if(day==='Sunday'&&time==='00:51:10'&& x === 0){
            toDiscord()
            x++
        }
        if(day==='Sunday'&&time==='00:51:45'&& y === 0){
            toDiscordd()
            y++
        }
        if(x===1&&y===1){
            process.exit()
        }
        
    }
}

function loop(){
    do(1>0){
        console.log('hi')
        
    }
}

loop()