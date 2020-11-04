const Discord = require("discord.js") 
const authorID = (client, message, args, name, code) => {
  
  code = code.replaceLast("$authorID", message.author.id) 
     // text = text.replace("$authorID", message.auth
  return {
    code: code,
  } 
}

module.exports = authorID;