const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs")

client.on("ready", () => {
  console.log("I am ready!");
});

//Actual Bot Stuff

var ableistslurs = [
  "stupid",
  "imbecile",
  "estupido",
  "estúpido",
  "imbécil",
  "imbecil",
  "tonto",
  "dumb",
  "tonteria",
  "tontería",
  "retrasado",
  "retard",
  "estupidez",

]

var mislurs = [
  "crazy",
  "wacko",
  "psycho"
]

client.on("message", (message) => {
  //policebot
  for (var i = 0; i < ableistslurs.length; i++) {
  if (message.content.includes(ableistslurs[i])) {
    message.channel.send('Ableist slur detected and removed. This server remains a safe space for those with Cognitive Disabilities & other marginalised identities.');
     break;
  }
}

});

client.login(config.token);
//https://discordapp.com/oauth2/authorize?client_id=457849546613981195&scope=bot
