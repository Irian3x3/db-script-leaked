const voiceID = async (client, message, args, name, code) => {

    let r = code.split("$voiceID[").length - 1

    let inside = code.split("$voiceID[")[r].split("]")[0]

    let id = (inside ? inside : message.author.id)

    let member = message.guild.members.cache.get(id)

    let err = client.suppress.get(message.idd)

    if (!member && err === undefined) return message.channel.send(`:x: Invalid user ID in \`$voiceID[${inside}]\``)
    else if (!member && err !== undefined) return message.channel.send(err).catch(err => {})
    
    let m = ""

    if (member.voice.channel) m = member.voice.channel.id

    code = code.replaceLast(`$voiceID[${inside}]`, m)

    return {
        code: code
    }
}

module.exports = voiceID