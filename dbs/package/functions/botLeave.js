const botLeave = (client, message, args, name, code) => {

    let r = code.split("$botLeave[").length - 1

    let inside = code.split("$botLeave[")[r].split("]")[0]

    let id = (inside ? inside : message.guild.id)

    let guild = client.guilds.cache.get(id)

    let err = client.suppress.get(message.idd)

    if (!guild && err === undefined) return message.channel.send(`:x: Invalid guild ID in \`$botLeave[${inside}]\``)
    else if (!guild && err !== undefined) return message.channel.send(err).catch(err => {})
    
    code = code.replaceLast(`$botLeave[${inside}]`, "")

    guild.leave()

    return {
        code: code
    }
}

module.exports = botLeave