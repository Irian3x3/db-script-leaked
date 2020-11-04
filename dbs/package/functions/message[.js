const message = (client, message, args, name, code) => {
  
  let r = code.split("$message[").length - 1
  
  let inside = code.split("$message[")[r].split("]")[0]
  
  if (!inside) {
    code = code.replaceLast("$message[]", args.join(" ")) 
  } else {
    if (isNaN(inside) || Number(inside) < 1) return message.channel.send(`❌ Invalid arg number in \`$message[${inside}]\``)
  
    let n = args[Number(inside) - 1] || ""
    
    code = code.replaceLast(`$message[${inside}]`, n) 
  }
  
  
  return {
    code: code 
  } 
}

module.exports =message