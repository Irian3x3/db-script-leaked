const rolePosition = async (client, message, args, name, code) => {

    let r = code.split("$rolePosition[").length - 1

    let inside = code.split("$rolePosition[")[r].split("]")[0]

    let id = (inside ? inside : message.author.id)

    let role = message.guild.roles.cache.get(id)

    let err = client.suppress.get(message.idd)

    if(!role && err === undefined) return message.channel.send(`:x: Invalid role ID in \`$rolePosition[${inside}]\``)
    else if (!role && err !== undefined) return message.channel.send(err).catch(err => {})
    
    code = code.replaceLast(`$rolePosition[${inside}]`, (message.guild.roles.cache.size - role.position))
    
    return {
        code: code
    }
}

module.exports = rolePosition