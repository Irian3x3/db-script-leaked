const userAvatar = async (client, message, args, name, code) => {
  
  let r = code.split("$userAvatar[").length - 1
  
  let inside = code.split("$userAvatar[")[r].split("]")[0]
  
  let [id, format, dynamic, size] = inside.split(";")

  let user = await client.users.fetch(id).catch(err => {}) || message.author;
  
  let err = client.suppress.get(message.idd)

  let result;

  if (inside) {
    if(dynamic) {
      if(dynamic==="true") dynamic = true;
      else dynamic = false;
    }

    result = user.displayAvatarURL({ format: format, dynamic: (dynamic ? dynamic : false), size: size ? Number(size) : 128 })

  } else {
    result = user.displayAvatarURL()
  }
   
  code = code.replaceLast(`$userAvatar[${inside}]`, result)
  
  return {
    code:code 
  } 
}

module.exports = userAvatar