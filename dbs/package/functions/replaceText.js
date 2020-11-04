const replaceText = async (client, message, args, name, code) => {

    let r = code.split("$replaceText[").length - 1

    let inside = code.split("$replaceText[")[r].split("]")[0]

    let [text, match, replacer] = inside.split(";")

    let err = client.suppress.get(message.idd)

    if (inside.split(";").length !== 3 && err === undefined) return message.channel.send(`:x: Invalid number of fields in \`$replaceText[${inside}]\``)
    else if (inside.split(";").length !== 3 && err !== undefined) return message.channel.send(err).catch(err => {})
    text = text.split(match).join(replacer)

    code = code.replaceLast(`$replaceText[${inside}]`, text)

    return {
        code: code
    }
}

module.exports = replaceText;