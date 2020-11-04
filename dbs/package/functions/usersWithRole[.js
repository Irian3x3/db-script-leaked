const usersWithRole = async (client, message, args, name, code) => {

  let r = code.split("$usersWithRole[").length - 1

  let inside = code.split("$usersWithRole[")[r].split("]")[0]

  let err = client.suppress.get(message.idd)

  if((!inside || inside === "undefined" || inside === "false") && err === undefined) return message.channel.send(`:x: Role ID or Name is not given in \`$userWithRole[]\``);

  let role = await message.guild.roles.fetch(inside) || message.guild.roles.cache.find(x => x.toLowerCase() === inside.toLowerCase())

  if(!role && err === undefined) return message.channel.send(`:x: Unable to find the Role in \`$usersWithRole[${inside}]\``)

  let users = []

  message.guild.members.cache.forEach(x => {
    if(x.roles.cache.get(role.id)) users.push(x.user.tag)
  })

  code = code.replaceLast(`$usersWithRole[${inside}]`, users.join("\n"))

  return {
    code: code
  }
}

module.exports = usersWithRole;