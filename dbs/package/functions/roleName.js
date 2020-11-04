const roleName = (client, message, args, name, code) => {

    let r = code.split("$roleName[").length - 1

    let inside = code.split("$roleName[")[r].split("]")[0]

    let role = message.guild.roles.cache.get(inside)

    let err = client.suppress.get(message.idd)

    if (!role && err === undefined) return message.channel.send(`:x: Invalid role ID in \`$roleName[${inside}]\``)
    else if (!role && err !== undefined) return message.channel.send(err).catch(err => {})
    
    code = code.replaceLast(`$roleName[${inside}]`, role.name)

    return {
        code: code
    }
}

module.exports = roleName