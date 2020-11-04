const serverName = (client, message, args, name, code) => {

    let r = code.split("$serverName").length - 1

    let inside = code.split("$serverName[")[r].split("]")[0]

    if (!inside) {

        code = code.replaceLast("$serverName[]", message.guild.name)

        return {
            code: code
        }
    } else {

        let id = inside

        let server = client.guilds.cache.get(id)

        let err = client.suppress.get(message.idd)

        if (!server && message && err === undefined) return message.channel.send(`:x: Invalid guild ID in \`$serverName[${inside}]\``)
        else if (!server && message && err !== undefined) return message.channel.send(err).catch(err => {})
        
        if (!server) return
      
        code = code.replaceLast(`$serverName[${inside}]`, server.name)
        return {
            code: code
        }
    }
}

module.exports = serverName