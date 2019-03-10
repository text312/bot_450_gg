const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("553985451413733377")
setInterval(function() {
channel.send(` سبااااااااااااااااااااام `);
}, 30)
})

client.login(process.env.BOT_TOKEN);