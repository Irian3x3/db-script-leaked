const mentioned = (client, message, args, name, code) => {

    let r = code.split("$mentioned[").length - 1

    let inside = code.split("$mentioned[")[r].split("]")[0]

    let [number, us] = inside.split(";")

    if (!us || us !== "yes") us = "no"

    if (isNaN(number) || Number(number) < 1) return message.channel.send(`:x: Invalid mention number in \`$mentioned[${inside}]\``)

    let m = (us === "no" ? "" : message.author.id)

    if (message.mentions.users.first(1)[Number(number) - 1] !== undefined) m = message.mentions.users.first(1)[Number(number) - 1].id

    code = code.replaceLast(`$mentioned[${inside}]`, m)

    return {
        code: code
    }
}

module.exports = mentioned