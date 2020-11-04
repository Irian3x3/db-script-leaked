const username = async (client, message, args, name, code) => {
  
  let r = code.split("$username[").length - 1
  
  let inside = code.split("$username[")[r].split("]")[0]
  
  let id = inside || message.author.id
  
  let user = await client.users.fetch(id).catch(e => {}) 
  
  let err = client.suppress.get(message.idd)

  if (!user) user = { username: "unknown" }
  
  code = code.replaceLast(`$username[${inside}]`, user.username.split("[").join("").split("]").join(""))
  
  return {
    code: code 
  } 
}



module.exports = username 