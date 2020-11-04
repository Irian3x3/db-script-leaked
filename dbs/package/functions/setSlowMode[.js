
const setSlowMode = async (client, message, args, name, code) => {

  let r = code.split("$setSlowMode[").length - 1

  let inside = code.split("$setSlowMode[")[r].split("]")[0]

  let [channelID, time] = inside.split(";")

  if (!channelID) return message.channel.send(`:x: Channel ID is not provided in \`$setSlowMode[${inside}]\``);
  if (!time) return message.channel.send(`:x: Slow mode time is not provided \`$setSlowMode[${inside}]\``);

  let channel = await client.channels.fetch(channelID);

  let err = client.suppress.get(message.idd)

  if (!channel && err === undefined) return message.channel.send(`:x: Unable to find the channel with given channel ID`)

try {
   let process = await channel.setRateLimitPerUser(Number(time))
} catch {
  if(err === undefined) return message.channel.send(`:x: Something went wrong while executing command`)
}
  code = code.replaceLast(`$setSlowMode[${inside}]`, "")

  return {
    code: code
  }
}

module.exports = setSlowMode;