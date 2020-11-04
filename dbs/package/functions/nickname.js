const nickname =async  (client, message, args, name, code) => {
  
  let r = code.split("$nickname[").length - 1
  
  let inside = code.split("$nickname[")[r].split("]")[0]
  
  let id = inside || message.author.id
  
  let member = message.guild.members.cache.get(id)
  
  let err = client.suppress.get(message.idd)

  if (!member && err === undefined) return message.channel.send(`❌ Invalid user ID in \`$nickname[${inside}]\``) 
  else if (!member && err !== undefined) return message.channel.send(err).catch(err => {})
  
  code = code.replaceLast(`$nickname[${inside}]`, member.displayName)
  
  return {
    code:code 
  } 
}

module.exports = nickname 