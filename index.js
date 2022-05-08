const Discord = require('Discord.js')

const Intents = require('Discord.js')
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES] })
const { MessageEmbed: RichEmbed } = require("discord.js");

//Conect to boot
client.login("OTcyNjM3OTMzNDI3Mzg0NDEx.Ga_CbV.cfK3srnfaiXczZUoLMaWgBFQiDujv7LKKZBbW0")

//Listen the event when is connect
client.on('ready', () => {
    console.log('Bot is ready as ' + client.user.tag)
    client.user.setStatus('dnd')

    //Print bot's status
    console.log(client.user.presence.status)

})

//Listen events 
client.on('message', async message => {
    // Receiving message


    //Response on base a conditional
    if (message.content === 'ping') {
        message.reply('Pong')
    }

    //Response to all the channel
    if (message.content === 'hello') {

        console.log(message.content);
        //Response with the user name
        message.channel.send('Hello ' + message.author.name)


    }


    if (message.content.includes('!test')) {
        console.log(message.content);
        message.channel.send('Glad you are testing')
    }

    if (message.content === '!fazt') {
        message.channel.send('http//youtube.com/fazttech', 'http//youtube.com/faztcode')
    }










});