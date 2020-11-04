const categoryCount = async (client, message, args, name, code) => {

    code = code.replaceLast("$categoryCount", message.guild.channels.cache.filter(ch => ch.type === "category").size)

    return {
        code: code
    }
}

module.exports = categoryCount