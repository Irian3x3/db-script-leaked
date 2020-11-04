const embed = require("../../package/embed.js")

const onlyForUsers = (client, message, args, name, code) => {

    let r = code.split("$onlyForUsers[").length - 1

    let inside = code.split("$onlyForUsers[")[r].split("]")[0]

    let fields = inside.split(";")

    let error = fields.pop()

    if (!fields.some(x => x === message.author.id)) {
        if (error.trim()) {
            error = embed(error)

            message.channel.send(error.error, error.embed)
        }

        return ""
    }

    code = code.replaceLast(`$onlyForUsers[${inside}]`, "")

    return {
        code: code
    }
}

module.exports = onlyForUsers