const embed = require('../../package/embed.js')

const onlyAdmin = (client, message, args, name, code) => {
  
  let r = code.split("$onlyAdmin[").length - 1
  
  let error = code.split("$onlyAdmin[")[r].split("]")[0] 
  
  if (!message.member.hasPermission("ADMINISTRATOR")) {
  
    if (error) {
      let e = embed(error)
      
      message.channel.send(e.error, e.embed)
    } 
    return "" 
  }
  
  
  code = code.replaceLast(`$onlyAdmin[${error}]`, "") 
  return {
    code:code, 
  } 
}

module.exports = onlyAdmin 