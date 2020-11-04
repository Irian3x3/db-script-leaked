const f = require("../../package/embed.js")

const channelSendMessage = (client, message, args, name, code) => {

    let r = code.split("$channelSendMessage[").length - 1

    let inside = code.split("$channelSendMessage[")[r].split("]")[0]

    let [ch, msg] = inside.split(";")


    if(!ch) return message.channel.send(`:x: Channel ID is not provided \`$channelSendMessage[${inside}]\``)
    if(!msg) return message.channel.send(`:x: Message is not provided \`$channelSendMessage[${inside}]\``)

    let channel = client.channels.cache.get(ch)

    let err = client.suppress.get(message.idd)

    if (!channel && err === undefined) return message.channel.send(`:x: Invalid channel ID in \`$channelSendMessage[${inside}]\``)
    else if (!channel && err !== undefined) return message.channel.send(err).catch(err => {})

    let m = f(msg)

    channel.send(m.error, m.embed).catch(e => {
      message.channel.send(e.message)
    })

    code = code.replaceLast(`$channelSendMessage[${inside}]`, "")

    return {
        code: code
    }
}

module.exports = channelSendMessage