const userHasRole = async (client, message, args, name, code) => {

  let r = code.split("$userHasRole[").length - 1

  let inside = code.split("$userHasRole[")[r].split("]")[0]

  let [userID, roleID] = inside.split(";")

 let err = client.suppress.get(message.idd)

 if(!userID && err === undefined) return message.channel.send(`:x: User ID is not given \`$userHasRole[${inside}]\``)
 if(!roleID && err === undefined) return message.channel.send(`:x: Role ID is not given \`$userHasRole[${inside}]\``)

  let user = await message.guild.members.fetch(userID).catch(err => { })

  

  if (user && user.roles.cache.find(x => x.id === roleID)) user = true
  else
  user = false;

    code = code.replaceLast(`$userHasRole[${inside}]`, user)

  return {
    code: code
  }
}

module.exports = userHasRole;