const fs = require("fs");
const {
   indonesia
} = require("./language");

// Website Api (jgn di ganti biar gk eror)
global.APIs = {
   alfa: 'https://api.zeeoneofc.my.id', //apabila link api eror, segera laporkan ke owner
   jaya: 'https://happy-jeans-fox.cyclic.app',
}

//buy apikey premium 0887435047326
// Free apikey (silahkan login terus ganti Your Key dgn apikey lu)
global.APIKeys = {
   'https://api.zeeoneofc.my.id': 'Insert Your Apikey', // 👉 login https://api.zeeoneofc.my.id to get apikey
   'https://happy-jeans-fox.cyclic.app': 'Ke6J9btNRV', //Free Apikey
}

//language 
global.language = indonesia //change indonesia to english if you don't understand the language used by the bot

global.BOT_TOKEN = "Insert Your Token" //create bot here https://t.me/BotFather and get the bot token
global.BOT_NAME = "Insert Your Name Bot" //your bot name
global.OWNER_NAME = "Insert Your Name" //your name
global.OWNER_NUMBER = "Insert Your Number" //your telegram number
global.OWNER = ["Insert Your Username Link", "Insert Your Username Link"] // pastikan username sudah sesuai agar fitur khusus owner bisa di pakai
global.THUMBNAIL = "./image/lol.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.DONASI = "./image/donasi.jpg" // foto donasi di folder image
global.lang = language //don't change
