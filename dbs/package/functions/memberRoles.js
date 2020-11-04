const memberRoles = async (client, message, args, name, code) => {

    let r = code.split("$memberRoles[").length - 1

    let inside = code.split("$memberRoles[")[r].split("]")[0]

    let id = (inside ? inside : message.author.id)

    let member = message.guild.members.cache.get(id)

    let err = client.suppress.get(message.idd)

    if (!member && err === undefined) return message.channel.send(`:x: Invalid user ID in \`$memberRoles[${inside}]\``)
    else if (!member && err !== undefined) return message.channel.send(err).catch(err => {})
    
    code = code.replaceLast(`$memberRoles[${inside}]`, member.roles.cache.filter(role => role.id !== message.guild.id).map(role => role.name).join(", "))

    return {
        code: code
    }
}

module.exports = memberRoles;