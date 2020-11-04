const roleID = async (client, message, args, name, code) => {

    let r = code.split("$roleID[").length - 1

    let inside = code.split("$roleID[")[r].split("]")[0]

    let role = message.guild.roles.cache.find(role => role.name === inside)

    let err = client.suppress.get(message.idd)

    if(!role && err === undefined) return message.channel.send(`:x: Invalid role name in \`$roleID[${inside}]\``)
    else if (!role && err !== undefined) return message.channel.send(err).catch(err => {})
    
    code = code.replaceLast(`$roleID[${inside}]`, role.id)
    
    return {
        code: code
    }
}

module.exports = roleID