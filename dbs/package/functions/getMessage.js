const getMessage = async (client, message, args, name, code) => {

    let r = code.split("$getMessage[").length - 1

    let inside = code.split("$getMessage[")[r].split("]")[0]

    let [channelID, messageID, option] = inside.split(";")

    let channel = message.guild.channels.cache.get(channelID)

    let err = client.suppress.get(message.idd)

    if (!channel && err === undefined) return message.channel.send(`:x: Invalid channel ID in \`$getMessage[${inside}]\``)
    else if (!channel && err !== undefined) return message.channel.send(err).catch(err => {})

    let msg = await channel.messages.fetch(messageID).catch(err => {})

    if (!msg && err === undefined) return message.channel.send(`:x: Invalid message ID in \`$getMessage[${inside}]\``)
    else if (!msg && err !== undefined) return message.channel.send(err).catch(err => {})

    let opt = {
        content: msg.content,
        user: msg.author.id,
        username: msg.author.tag,
        avatar: msg.author.displayAvatarURL,
        tag: msg.author.tag
    }[option]

    if (!opt && err === undefined) return message.channel.send(`:x: Invalid option in \`$getMessage[${inside}]\``)
    else if (!opt && err !== undefined) return message.channel.send(err).catch(err => {})
   
    code = code.replaceLast(`$getMessage[${inside}]`, opt)

    return {
        code: code
    }
}

module.exports = getMessage