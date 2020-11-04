const giveRole = async (client, message, args, name, code) => {

    let r = code.split("$giveRole[").length - 1

    let inside = code.split("$giveRole[")[r].split("]")[0]

    let[userID, roleID] = inside.split(";")

    if (!userID) userID = message.author.id 

    let role = message.guild.roles.cache.get(roleID)

    let member = message.guild.members.cache.get(userID)

    let err = client.suppress.get(message.idd)
    
    if (!role && err === undefined) return message.channel.send(`:x: Invalid role ID in \`$giveRole[${inside}]\``) 
    else if (!role && err !== undefined) return message.channel.send(err).catch(err => {})
    
    if (!member && err === undefined) return message.channel.send(`:x: Invalid user ID in \`$giveRole[${inside}]\``)
    else if (!member && err !== undefined) return message.channel.send(err).catch(err => {})

    member = await member.roles.add(role.id).catch(err => {})

    if (!member && err === undefined) return message.channel.send(':x: Failed to give the role to the user.')
    else if (!member && err !== undefined) return message.channel.send(err).catch(err => {})

    code = code.replaceLast(`$giveRole[${inside}]`, "")

    return {
        code: code
    }
}

module.exports = giveRole