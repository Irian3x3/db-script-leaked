const Discord = require("discord.js") 
const title = (client, message, args, name, code) => {
  
  if (code.split("$title[").length >= 3) return message.channel.send(`❌ Can't use more than one $title.`)
  
  let inside = code.split("$title[")[1].split("]")[0]
  
  let embed = client.embeds.get(message.idd) 
    if (!embed) embed = new Discord.MessageEmbed()
  embed.setTitle(inside)
  
  client.embeds.set(message.idd, embed)
  
  code = code.replace(`$title[${inside}]`, "")
  
  return {
    code: code 
  } 
}

module.exports = title 