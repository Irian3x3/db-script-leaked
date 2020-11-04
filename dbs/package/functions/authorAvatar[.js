const Discord = require("discord.js")
const authorAvatar = (client, message, args, name, code) => {

  let r = code.split("$authorAvatar[").length - 1

  let inside = code.split("$authorAvatar[")[r].split("]")[0]

  let result;

  if (inside) {
    let [format, dynamic, size] = inside.split(";")

    if(dynamic) {
      if(dynamic==="true") dynamic = true;
      else dynamic = false;
    }

    result = message.author.displayAvatarURL({ format: format, dynamic: (dynamic ? dynamic : false), size: size ? Number(size) : 128 })

  } else {
    result = message.author.displayAvatarURL()
  }



  code = code.replaceLast(`$authorAvatar[${inside ? inside : ""}]`, result)

  return {
    code: code,
  }
}

module.exports = authorAvatar;