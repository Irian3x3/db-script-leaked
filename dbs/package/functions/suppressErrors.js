const suppressErrors = (client, message, args, name, code) => {

    if (code.split("$suppressErrors[").length >= 3) return message.channel.send(`Can't use more than one $suppressErrors.`)

    let inside = code.split("$suppressErrors[")[1].split("]")[0]

    client.suppress.set(message.idd, inside)

    code = code.replaceLast(`$suppressErrors[${inside}]`, "")

    return  {
        code: code
    }
}

module.exports = suppressErrors