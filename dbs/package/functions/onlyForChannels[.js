const embed = require("../../package/embed.js")

const onlyForChannels = (client, message, args, name, code) => {

    let r = code.split("$onlyForChannels[").length - 1

    let inside = code.split("$onlyForChannels[")[r].split("]")[0]

    let channel = inside.split(";")

    let error = channel.pop()

    if (!channel.includes(message.channel.id)) {
        if (error) {
            let m = embed(error)

            message.channel.send(m.error, m.embed)
        }

        return ""
    }

    code = code.replaceLast(`$onlyForChannels[${inside}]`, "")

    return {
        code: code
    }
}

module.exports = onlyForChannels;