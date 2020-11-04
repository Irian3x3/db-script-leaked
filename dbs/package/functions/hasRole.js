const hasRole = async (client, message, args, name, code) => {

    let r = code.split("$hasRole[").length - 1

    let inside = code.split("$hasRole[")[r].split("]")[0]

    let fields = inside.split(";")

    let id = (fields[0] ? fields[0] : message.auhor.id)

    let member = message.guild.members.cache.get(id)

    let err = client.suppress.get(message.idd)

    if (!member & err === undefined) return message.channel.send(`:x: Invalid user ID in \`$hasRole[${inside}]\``)
    else if (!member && err !== undefined) return message.channel.send(err).catch(err => {})
    
    code = code.replaceLast(`$hasRole[${inside}]`, member.roles.cache.has(fields[1]))

    return {
        code: code
    }
}

module.exports = hasRole