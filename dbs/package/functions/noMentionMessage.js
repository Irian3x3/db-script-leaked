const noMentionMessage = (client, message, args, name, code) => {
  
  let r = code.split("$noMentionMessage[").length - 1
  
  let inside = code.split("$noMentionMessage[")[r].split("]")[0]
  
  args = args.filter(arg => ["<@", "<@!","<@&","<#"].some(x => !arg.startsWith(x)) && !arg.endsWith(">"))
  
  if (!inside) {
    code = code.replaceLast(`$noMentionMessage[]`, args.join(" ")) 
  } else {
    if (isNaN(inside) || Number(inside) < 1) return message.channel.send(`❌ Invalid arg number in \`$noMentionMessage[${inside}]\``)
    
    let n = args[Number(inside) - 1] || ""
    
    code = code.replaceLast(`$noMentionMessage[${inside}]`, n) 
  }
  

  
  return {
    code:code 
  } 
}

module.exports = noMentionMessage 