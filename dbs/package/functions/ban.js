const ban = async (client, message, args, name, code) => {

  let r = code.split("$ban[").length - 1

  let inside = code.split("$ban[")[r].split("]")[0]

  let [userID, reason] = inside.split(";")

  let member = message.guild.members.cache.get(userID)

  if (!member) {
    message.guild.members.ban(userID, { reason: reason }).catch(err => {
      return message.channel.send(`:x: Invalid user ID in \`$ban[${inside}]\``);
    })


    code = code.replaceLast(`$ban[${inside}]`, "");
    
    return {
      code: code
    }
  }

  let user = await client.users.fetch(userID).catch(err => { })

  let err = client.suppress.get(message.idd)

  if (!user && err === undefined) return message.channel.send(`:x: Invalid user ID in \`$ban[${inside}]\``)
  else if (!user && err !== undefined) return message.channel.send(err).catch(err => { })

  if (member && message.guild.me.roles.highest.position <= member.roles.highest.position) return message.channel.send(`:x: Failed to ban user.`)

  if (!message.guild.me.hasPermission("BAN_MEMBERS") && err === undefined) return message.channel.send(`:x: Failed to ban user.`)
  else if (!message.guild.me.hasPermission("BAN_MEMBERS") && err !== undefined) return message.channel.send(err).catch(err => { })

  member.ban({ reason: reason }).catch((error) => {
    return message.channel.send(":x: Error in baning ```" + error + "```")
  })

  code = code.replaceLast(`$ban[${inside}]`, "")

  return {
    code: code
  }
}

module.exports = ban