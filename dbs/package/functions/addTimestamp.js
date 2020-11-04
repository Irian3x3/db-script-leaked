const Discord = require("discord.js") 
const addTimestamp = (client, message, args, name, code) => {
  
  if (code.split("$addTimestamp").length >= 3) return message.channel.send(`❌ Can't use more than one $addTimestamp.`)
  
  let embed = client.embeds.get(message.idd) 
    if (!embed) embed = new Discord.MessageEmbed()
  embed.setTimestamp()
  
  client.embeds.set(message.idd, embed)
  
  code = code.replace(`$addTimestamp`, "")
  
  return {
    code: code 
  } 
}

module.exports = addTimestamp;