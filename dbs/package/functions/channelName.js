const channelName = (client, message, args, name, code) => {

  let r = code.split("$channelName[").length - 1

  let inside = code.split("$channelName[")[r].split("]")[0]

  let id = (inside ? inside : message.channel.name)
  
  let channel = message.guild.channels.cache.get(id) 

  let err = client.suppress.get(message.idd)

  if (!channel && err === undefined) return message.channel.send(`:x: Invalid channel ID in \`$channelName[${inside}]\``)
  else if (!channel && err !== undefined) return message.channel.send(err).catch(err => {})
  
  code = code.replaceLast(`$channelName[${inside}]`, channel.name)

  return {
    code: code,
  }
}

module.exports = channelName