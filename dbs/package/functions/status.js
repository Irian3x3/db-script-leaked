const status = (client, message, args, name, code) => {

    let r = code.split("$status[").length - 1

    let inside = code.split("$status[")[r].split("]")[0]

    let id = (inside ? inside : message.author.id)

    let user = client.users.cache.get(id)

    let err = client.suppress.get(message.idd)

    if (!user && err === undefined) return message.channel.send(`:x: Invalid user ID in \`$status[${inside}]\``)
    else if (!user & err !== undefined) return message.channel.send(err).catch(err => {})

    let platform = user.presence.clientStatus

    let status = user.presence.status

    if (status === "offline" && platform) status = "invisible"

    code = code.replaceLast(`$status[${inside}]`, status)

    return {
        code: code
    }
}

module.exports = status