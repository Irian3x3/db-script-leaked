const findEmote = (client, message, args, name, code) => {
    let r = code.split("$findEmote[").length - 1

    let option = code.split("$findEmote[")[r].split("]")[0]

    if(!option) return message.channel.send(":x: Nothing is provided inside `$findEmote[]`")


    let emote = message.guild.emojis.cache.get(option) || message.guild.emojis.cache.find(emoji => emoji.name.toLowerCase() === option.trim().toLowerCase()) || 'false'

    code = code.replaceLast(`$findEmote[${option}]`, emote)

    return {
        code: code
    }
}

module.exports = findEmote;