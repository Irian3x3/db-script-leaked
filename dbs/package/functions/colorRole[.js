
const colorRole = async (client, message, args, name, code) => {
  let err = client.suppress.get(message.idd)
  let r = code.split("$colorRole[").length - 1
  
  let inside = code.split("$colorRole[")[r].split("]")[0]


   let [hex, ID] = inside.split(";")
 
if(!hex && err === undefined) return message.channel.send(`:x: Hex color code is not given in \`$colorRole[${inside}]\``)
 if(!ID && err === undefined) return message.channel.send(`:x: ID is not given in \`$colorRole[${inside}]\``)
  
let role = message.guild.roles.cache.get(ID)

if(!role && err === undefined) return message.channel.send(`:x: Invalid role ID in \`$colorRole[${inside}]\``)


role = await role.setColor(hex)

if(!role && err === undefined) return message.channel.send(`:x: Unable tp change the role color due to internal issue.`)

  code = code.replaceLast(`$colorRole[${inside}]`, "")
  
  return {
    code:code 
  } 
}

module.exports = colorRole