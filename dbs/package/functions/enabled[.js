const embed = require("../../package/embed.js")

const enabled = async (client, message, args, name, code) => {
  if (code.split("$enabled[").length >= 3) return message.channel.send(`:x: Cant use more than one $enabled[]`)
  let inside = code.split("$enabled[")[1].split("]")[0]

  let [condition, error] = inside.split(";");

  if (!error) return message.channel.send(`:x: Error is not given in \`$enabled[${inside}]\``)

  if (condition.toLowerCase().trim() === "no") {
    let m = embed(error)

    return message.channel.send(m.error, m.embed)
  }


  code = code.replaceLast(`$enabled[${inside}]`, "")

  return {
    code: code
  }
}


module.exports = enabled;