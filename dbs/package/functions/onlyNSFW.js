const embed = require("../../package/embed.js")

const onlyNSFW = (client, message, args, name, code) => {

    let r = code.split("$onlyNSFW[").length - 1

    let inside = code.split("$onlyNSFW[")[r].split("]")[0]


    if(!inside) return message.channel.send(`:x: Error message is not provided in \`$onlyNSFW[]\``)

if(!message.channel.nsfw) {
  return message.channel.send(inside)
}
    code = code.replaceLast(`$onlyNSFW[${inside}]`, "")

    return {
        code: code
    }
}

module.exports = onlyNSFW