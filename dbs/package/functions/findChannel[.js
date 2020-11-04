const findChannel = (client, message, args, name, code) => {
    let r = code.split("$findChannel[").length - 1

    let option = code.split("$findChannel[")[r].split("]")[0]

    let channel = message.guild.channels.cache.get(option) || message.mentions.channels.first() || message.guild.channels.cache.find(channel => channel.name.toLowerCase() === option.trim().toLowerCase()) || 'false'

    code = code.replaceLast(`$findChannel[${option}]`, (channel ? channel.id : channel))

    return {
        code: code
    }
}

module.exports = findChannel;