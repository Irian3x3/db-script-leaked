const embed = require("../../package/embed.js")

const onlyForServers = (client, message, args, name, code) => {

    let r = code.split("$onlyForServers[").length - 1

    let inside = code.split("$onlyForServers[")[r].split("]")[0]

    let servers = inside.split(";")

    let error = servers.pop()

    if (!servers.includes(message.guild.id)) {
        if (error) {
            let m = embed(error)

            message.channel.send(m.error, m.embed)
        }

        return ""
    }

    code = code.replaceLast(`$onlyForServers[${inside}]`, "")

    return {
        code: code
    }
}

module.exports = onlyForServers