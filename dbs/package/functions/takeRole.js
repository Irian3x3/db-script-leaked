const takeRole = async(client, message, args, name, code) => {

    let r = code.split("$takeRole[").length - 1

    let inside = code.split("$takeRole[")[r].split("]")[0]

    let[userID, roleID] = inside.split(";")

    if (!userID) userID = message.author.id 

    let role = message.guild.roles.cache.get(roleID)

    let member = message.guild.members.cache.get(userID)

    let err = client.suppress.get(message.idd)
    
    if (!role && err === undefined) return message.channel.send(`:x: Invalid role ID in \`$takeRole[${inside}]\``) 
    else if (!role && err !== undefined) return message.channel.send(err).catch(err => {})

    if (!member && err === undefined) return message.channel.send(`:x: Invalid user ID in \`$takeRole[${inside}]\``)
    else if (!member && err !== undefined) return message.channel.send(err).catch(err => {})

    member = await member.roles.remove(role.id).catch(err => {})

    if (!member && err === undefined) return message.channel.send(`:x: Failed to remove role.`)
    else if (!member && err !== undefined) return message.channel.send(err).catch(err => {})

    code = code.replaceLast(`$takeRole[${inside}]`, "")

    return {
        code: code
    }
}

module.exports = takeRole