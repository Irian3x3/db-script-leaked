const unban = async(client, message, args, name, code) => {

    let r = code.split("$unban[").length - 1

    let inside = code.split("$unban[")[r].split("]")[0]

    let [userID, reason] = inside.split(";")

    let user = await client.users.fetch(userID).catch(err =>{})

    let err = client.suppress.get(message.idd)

    if (!user && err === undefined) return message.channel.send(`:x: Invalid user ID in \`$unban[${inside}]\``)
    else if (!user && err !== undefined) return message.channel.send(err).catch(err => {})

    if (!message.guild.me.hasPermission("BAN_MEMBERS") && err === undefined) return message.channel.send(`:x: Failed to unban user.`) 
    else if (!message.guild.me.hasPermission("BAN_MEMBERS") && err !== undefined) return message.channel.send(err).catch(err => {})
    
    message.guild.members.unban(user, reason)

    code = code.replaceLast(`$unban[${inside}]`, "")

    return {
        code: code
    }
}

module.exports = unban