
const dm = async (client, message, args, name, code, channel) => {

    if (code.split("$dm").length >= 3) return message.channel.send(`:x: Cant use more than one $dm`)

    if (code.split("$dm")[1].startsWith("[")) {

        let inside = code.split("$dm[")[1].split("]")[0]

        let user = client.users.cache.get(inside)

        let err = client.suppress.get(message.idd)

        if (!user && message.channel && err === undefined) return message.channel.send(`:x: Invalid user ID in \`$dm[${inside}]\``)
        else if (!user && message.channel && err !== undefined) return message.channel.send(err).catch(err => {})

        if (!user) return console.error(`Invalid user ID in $dm[${inside}]`)
      
        code = code.replaceLast(`$dm[${inside}]`, "")

        client.channel.set(message.idd, user)

        return {
            code: code,
        }
    } else {
        code = code.replaceLast("$dm", "")

        client.channel.set(message.idd, message.author)
        
        return {
            code: code
        }
    }
}

module.exports =dm