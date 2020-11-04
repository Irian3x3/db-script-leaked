const embed = require("../../package/embed.js")

const onlyForRoles = async (client, message, args, name, code) => {

    let r = code.split("$onlyForRoles[").length - 1

    let inside = code.split("$onlyForRoles[")[r].split("]")[0]

    let fields = inside.split(";")

    let error = fields.pop()

    let roles = fields

    if (!roles.some(r => message.member.roles.cache.some(role => role.id === r || role.name === r))) {
        if (error) {

            let e = embed(error)

            message.channel.send(e.error, e.embed).catch(Err => {})
        }

        return ""
    }

    await new Promise(resolve => setTimeout(resolve, 10))

    code = code.replaceLast(`$onlyForRoles[${inside}]`, "")

    return {
        code: code
    }
}

module.exports = onlyForRoles