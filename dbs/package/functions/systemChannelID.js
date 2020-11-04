const systemChannelID = (client, message, args, name, code) => {

    code = code.replaceLast("$systemChannelID", message.guild.systemChannelID || "")

    return {
        code: code
    }
}

module.exports = systemChannelID;