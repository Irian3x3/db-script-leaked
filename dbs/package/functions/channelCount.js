const channelCount = async (client, message, args, name, code) => {

    code = code.replaceLast("$channelCount", message.guild.channels.cache.filter(ch => ch.type !== "category").size)

    return {
        code: code
    }
}

module.exports = channelCount