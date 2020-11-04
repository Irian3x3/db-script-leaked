const highestRole = async (client, message, args, name, code) => {

    let r = code.split("$highestRole[").length - 1

    let inside = code.split("$highestRole[")[r].split("]")[0]

    let id = (inside ? inside : message.author.id)

    let member = message.guild.members.cache.get(id)

    let err = client.suppress.get(message.idd)

    if(!member && err === undefined) return message.channel.send(`:x: Invalid user ID in \`$highestRole[${inside}]\``)
    else if (!member && err !== undefined) return message.channel.send(err).catch(err => {})

    code = code.replaceLast(`$highestRole[${inside}]`, member.roles.highest.id)
    
    return {
        code: code
    }
}

module.exports = highestRole