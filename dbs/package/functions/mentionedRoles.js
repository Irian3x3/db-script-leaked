const mentionedRoles = (client, message, args, name, code) => {

    let r = code.split("$mentionedRoles[").length - 1

    let inside = code.split("$mentionedRoles[")[r].split("]")[0]

    let [number] = inside.split(";")

    if (isNaN(number) || Number(number) < 1) return message.channel.send(`:x: Invalid mention number in \`$mentionedRoles[${inside}]\``)

    let m = ""

    if (message.mentions.roles.first(1)[Number(number) - 1] !== undefined) m = message.mentions.roles.first(1)[Number(number) - 1].id

    code = code.replaceLast(`$mentionedRoles[${inside}]`, m)

    return {
        code: code
    }
}

module.exports = mentionedRoles;