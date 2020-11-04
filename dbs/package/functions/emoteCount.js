const emoteCount = async (client, message, args, name, code) => {

    code = code.replaceLast("$emoteCount", message.guild.emojis.cache.size)

    return {
        code: code
    }
}
module.exports = emoteCount