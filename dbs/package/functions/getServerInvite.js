const getServerInvite = async(client, message, args, name, code) => {

    let r = code.split("$getServerInvite[").length - 1

    let inside = code.split("$getServerInvite[")[r].split("]")[0]

    let id = (inside ? inside : message.guild.id)

    let guild = client.guilds.cache.get(id)

    let err = client.suppress.get(message.idd)

    if (!guild && err === undefined) return message.channel.send(`:x: Invalid guild ID in \`$getServerInvite[${inside}]\``)
    else if (!guild && err !== undefined) return message.channel.send(err).catch(err => {})
    
    let channel = guild.channels.cache.random()

    let link = await channel.createInvite({
        maxAge: 0
    }).catch(err => {})

    if (!link) link = ""

    code = code.replaceLast(`$getServerInvite[${inside}]`, `discord.gg/${link.code}`)

    return {
        code: code
    }
}

module.exports = getServerInvite