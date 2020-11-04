const randomChannelID = (client, message, args, name, code) => {

    if (!code.includes("$randomChannelID")) return { code: code }

    code = code.split("$randomChannelID").join(message.guild.channels.cache.filter(ch => ch.type === "text").random().id)

    return {
        code: code
    }
}

module.exports = randomChannelID