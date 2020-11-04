const Discord = require("discord.js") 
const footer = (client, message, args, name, code) => {
  
  if (code.split("$footer[").length >= 3) return message.channel.send(`❌ Can't use more than one $footer`)
  
  let inside = code.split("$footer[")[1].split("]")[0]
 
  let [text, url] = inside.split(";")

  let embed = client.embeds.get(message.idd) 
  
  embed.setFooter(text, url)
  
  client.embeds.set(message.idd, embed)
  
  code = code.replace(`$footer[${inside}]`, "") 
  return {
    code:code 
  } 
}

module.exports = footer