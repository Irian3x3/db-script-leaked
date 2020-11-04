
const getRoleColor = async (client, message, args, name, code) => {
  let err = client.suppress.get(message.idd)
  let r = code.split("$getRoleColor[").length - 1
  
  let inside = code.split("$getRoleColor[")[r].split("]")[0]
  
if(!inside && err === undefined) return message.channel.send(`:x: ID is not given in \`$getRoleColor[${inside}]\``)
  let role = message.guild.roles.cache.get(inside)

if(!role && err === undefined) return message.channel.send(`:x: Invalid role ID in  \`$getRoleColor[${inside}]\``)

  code = code.replaceLast(`$getRoleColor[${inside}]`, role.color.toString(16))
  
  return {
    code:code 
  } 
}

module.exports = getRoleColor