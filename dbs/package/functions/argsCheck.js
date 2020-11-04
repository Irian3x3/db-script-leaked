 const embed = require("../../package/embed.js")
 
 const argsCheck = async(client, message, args, name, code) => {

   if (code.split("$argsCheck[").length >= 3) return message.channel.send(`❌ can't use more than one $argsCheck.`)

   let inside = code.split("$argsCheck[")[1].split("]")[0]

let fields = inside.split(";")

   

    let error = fields[1]
  
  let arg = fields[0]

  let option = arg.split("")[1]
console.log(option)
  if (arg.startsWith(">")) {

    let n = arg.split(">")[1]
    if (isNaN(n)) return message.channel.send(`❌ Invalid number in \`$argsCheck[${inside}]\``)
    if (args[parseInt(n)] === undefined) {
     if (error) {
        message.channel.send(error) 
      }
      
      return "" 
    } 
  } else if (arg.startsWith("<")) {
    let n = arg.split("<")[1]
    if (isNaN(n)) return message.channel.send(`❌ Invalid number in \`$argsCheck[${inside}]\``)
    if (args[parseInt(n)]) {
      if (error) {
        message.channel.send(error) 
      } 
      
      return "" 
    } 
  } else if (!isNaN(option)) {
    if (!args[parseInt(option)]) {
      if (error) {
        message.channel.send(error) 
      }
      
      return "" 
    } 
  } else {
    return message.channel.send(`❌ Invalid operator in \`$argsCheck[${inside}]\``) 
  }

  code = code.replace(`$argsCheck[${inside}]`, "")

    return {
        code: code
    }
}

module.exports = argsCheck