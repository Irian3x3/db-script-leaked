const embed = require("../../package/embed.js")

const onlyIfMessageContains = (client, message, args, name, code) => {

    let r = code.split("$onlyIfMessageContains[").length - 1

    let inside = code.split("$onlyIfMessageContains[")[r].split("]")[0]

    let fields = inside.split(";")

    let msg = fields;

    let error = fields.pop()


    if (!msg.some(e => message.content.includes(e))) {
        if (error) {
            let err = embed(error)

            message.channel.send(err.error, err.embed).catch(err => {})
        }

        return ""
    }

    code = code.replaceLast(`$onlyIfMessageContains[${inside}]`, "")

    return {
        code: code
    }
}

module.exports = onlyIfMessageContains