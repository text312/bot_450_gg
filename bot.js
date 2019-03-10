const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("553985451413733377")
setInterval(function() {
channel.send(` ★ Hello ★ , ★ Hello ★ , ★ Hello ★ , ★ Hello ★ , ★ Hello ★ , ★ Hello ★ , ★ Hello ★ , ★ Hello ★, ★ Hello ★ , ★ Hello ★ , ★ Hello ★ , ★ Hello ★ , ★ Kemo ★ , ★ Kemo ★ , ★ Hello ★ , ★ Hello ★ , ★ Hello ★ , ★ Hello ★  `);
}, 30)
})

client.login(process.env.BOT_TOKEN);