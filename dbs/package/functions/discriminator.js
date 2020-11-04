const discriminator = async (client, message, args, name, code) => {
  
  let r = code.split("$discriminator[").length - 1
  
  let inside = code.split("$discriminator[")[r].split("]")[0]
  
  let id = inside || message.author.id 
  
  let err = client.suppress.get(message.idd)

  let user = await client.users.fetch(id).catch(err => {}) 
  
  if (!user) user = { discriminator: 0 }
  
  code = code.replaceLast(`$discriminator[${inside}]`, user.discriminator)
  
  return {
    code:code 
  } 
}

module.exports = discriminator 