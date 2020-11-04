const Discord = require('discord.js')

const edit = require('../../package/bot/edit.js')

const delete_ = require('../../package/bot/delete.js')
const addreactions_ = require("../../package/bot/addreactions.js")
const interpret = require('../../package/interpreter.js')

const guildMemberAdd = (client, member) => {
  
  client.joined.map(async command => {
    
    let { guild, user } = member
    
    let message = {
      guild: guild,
      content: "",
      idd: Math.floor(Math.random() * 10101003949393),
      author: user,
      member: member 
    } 
    
    client.embeds.set(message.idd, new Discord.MessageEmbed())

    let name = await interpret(client, message, message.content.split(" "), command.name, command.name)
    
    let channel = guild.channels.cache.get(name)
    
    if (!channel) return console.error(`Channel not found (${name})`)
    
    let code = await interpret(client, message, message.content.split(" "), command.name, command.code)
    
    let dm = client.channel.get(message.idd)
        
    if (dm) {
      let msg = dm.send(code, client.embeds.get(message.idd)).catch(err => {})
      
      edit(client, message, msg, client.editIn.get(message.idd)) 

      delete_(client, message, msg)

      addreactions_(client, message, msg)

      client.addReactions.delete(message.idd)
      
      client.suppress.delete(message.idd)
      
      client.embeds.delete(message.idd)
    }
    
    if (code && !dm) {
       let msg = await require("../../package/bot/attachment.js")(client, message, channel, code)
      
      edit(client, message, msg, client.editIn.get(message.idd)) 

      delete_(client, message, msg)

      addreactions_(client, message, msg)

      client.addReactions.delete(message.idd)
      
      client.suppress.delete(message.idd)

      client.embeds.delete(message.idd)
    } 
  }) 
}

module.exports = guildMemberAdd;