const serverCount = (client, message, args, name, code) => {
  
  code = code.replaceLast(`$serverCount`, client.guilds.cache.size)
  
  return {
    code:code 
  } 
}

module.exports = serverCount 