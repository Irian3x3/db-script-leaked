const Discord = require('discord.js')

const embed = (msg) => {
  
  let Embed = new Discord.MessageEmbed()

  msg.split("{hyper").map((x, y) => {
    if (!msg.includes("{hyper:")) return 
      let ins = msg.split("{hyper:")[1].split("}")[0] 
      let text = ins.split(":")[0]
      let url = ins.split(":").slice(1).join(":") 
      msg = msg.replace(`{hyper:${ins}}`, `[${text}](${url})`) 
      //code = code.replace(`{hyper:${ins}}`, `[${text}](${url})`) 
    }) 
  
  if (msg.includes("{field:")) {
    msg.split("{field:").map(x => {
      
      if (!msg.includes("{field:")) return
      
      let inside = msg.split("{field:")[1].split("}")[0] 
      
      let [title, value] = inside.split(":") 
      
      Embed.addField(title, value)
      
      msg = msg.replace(`{field:${inside}}`, "") 
    }) 
  }
 
  if (msg.includes("{author:")) {
    
    let author = msg.split("{author:")[1].split("}")[0]
    
    Embed.setAuthor(author)
    
    msg = msg.replace(`{author:${author}}`, "")
    
    if (msg.includes("{authorIcon:")) {
      
      let icon = msg.split(`{authorIcon:`)[1].split("}")[0]
      
      Embed.setAuthor(author, icon)
      
      msg = msg.replace(`{authorIcon:${icon}}`, "") 
    } 
  }
  
  if (msg.includes("{color:")) {
    let color = msg.split("{color:")[1].split("}")[0]
    Embed.setColor(color)
    msg = msg.replace(`{color:${color}}`, "") 
  } 
  
  if (msg.includes("{title:")) {
    let title = msg.split("{title:")[1].split("}")[0]
    Embed.setTitle(title) 
    msg = msg.replace(`{title:${title}}`, "") 
  }
  
  if (msg.includes("{description:")) { 
    let description = msg.split("{description:")[1].split("}")[0] 
    Embed.setDescription(description) 
    msg = msg.replace(`{description:${description}}`, "") 
  } 
  
  if (msg.includes("{thumbnail:")) {
    let thumbnail = msg.split("{thumbnail:")[1].split("}")[0]
    Embed.setThumbnail(thumbnail) 
    msg = msg.replace(`{thumbnail:${thumbnail}}`, "") 
  } 
  
  if (msg.includes("{footer:")) {
    
    let footer = msg.split("{footer:")[1].split("}")[0]
    
    Embed.setFooter(footer)
    
    msg = msg.replace(`{footer:${footer}}`, "")
    
    if (msg.includes("{footerIcon:")) {
      
      let url = msg.split("{footerIcon:")[1].split("}")[0]
     
      Embed.setFooter(footer, url)
      
      msg = msg.replace(`{footerIcon:${url}}`, "") 
    } 
  }
  
  if (!Embed.color && !Embed.title && !Embed.description) Embed = undefined
  

  return {
    embed: Embed,
    error: msg
  } 
}

module.exports = embed