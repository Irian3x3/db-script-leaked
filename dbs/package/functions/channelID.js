const channelID = (client, message, args, name, code) => {

  let r = code.split("$channelID[").length - 1

  let inside = code.split("$channelID[")[r].split("]")[0]

  let id = (inside ? inside : message.channel.id)
  
  let channel = message.guild.channels.cache.find(ch => ch.name === id) || message.guild.channels.cache.get(id) 

  let err = client.suppress.get(message.idd)

  if (!channel && err === undefined) return message.channel.send(`:x: Invalid channel name in \`$channelID[${inside}]\``)
  else if (!channel && err !== undefined) return message.channel.send(err).catch(err => {})
  
  code = code.replaceLast(`$channelID[${inside}]`, channel.id)

  return {
    code: code,
  }
}

module.exports = channelID