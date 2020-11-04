const splitTextJoin = (client, message, args, name, code, array) => {

    let r = code.split("$splitTextJoin[").length - 1

    let inside = code.split("$splitTextJoin[")[r].split("]")[0]

    let err = client.suppress.get(message.idd)

    if (!array.length && err === undefined) return message.channel.send(`:x: Array is empty.`)
    else if (!array.length && err !== undefined) return message.channel.send(err).catch(err => {})
    
    code = code.replaceLast(`$splitTextJoin[${inside}]`, array.join(inside))

    return {
        code: code
    }
}

module.exports = splitTextJoin