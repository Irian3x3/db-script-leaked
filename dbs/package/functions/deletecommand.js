const ms = require("ms")

const deletecommand = async (client, message, args, name, code) => {

    if (code.split("$deletecommand[").length >= 3) return message.channel.send(`:x: Cant use more than one $deletecommand.`)

    let inside = code.split("$deletecommand[")[1].split("]")[0]

    let time = (isNaN(inside) ? ms(inside) : Number(inside))

    message.delete({timeout: time}).catch(err => {})

    code = code.replace(`$deletecommand[${inside}]`, "")

    return {
        code: code
    }
}

module.exports = deletecommand