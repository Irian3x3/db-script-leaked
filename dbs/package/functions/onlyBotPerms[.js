const embed = require("../../package/embed.js")

const onlyBotPerms = async (client, message, args, name, code) => {

    let r = code.split("$onlyBotPerms[").length - 1

    let perms = {
    admin: "ADMINISTRATOR",
    kick: "KICK_MEMBERS",
    ban: "BAN_MEMBERS",
    manageserver: "MANAGE_GUILD",
    managemessages: "MANAGE_MESSAGES",
    viewauditlogs: "VIEW_AUDIT_LOG",
    manageroles: "MANAGE_ROLES",
    managechannels: "MANAGE_CHANNELS",
    sendmessages: "SEND_MESSAGES", 
    managenicknames: "MANAGE_NICKNAMES",
  viewchannel: "VIEW_CHANNEL",
    changenickname: "CHANGE_NICKNAME"
    }

    let inside = code.split("$onlyBotPerms[")[r].split("]")[0]

    let fields = inside.split(";")

    let error = fields.pop()

    let array = []
  
  for(let i = 0; i < fields.length;i++) {
    if(perms[fields[i]] && !message.guild.me.hasPermission([perms[fields[i]]])) {

array.push(perms[fields[i]])
        
    }
  }

  if(array.length) {

  if (error) {
        let err = embed(error, code)
        
        try {
         message.channel.send(err.error.replace("{perms}", array.join(", ")), err.embed) 
        } catch(e) {
          console.log(e) 
        } 
      }
  }

  if(array.length) return;

  

  code = code.replaceLast(`$onlyBotPerms[${inside}]`, "")

  return {
      code: code
  }
}

module.exports = onlyBotPerms
