const guildID = (client, message, args, name, code) => {

    code = code.replaceLast("$guildID", message.guild.id)

    return {
        code: code
    }
}

module.exports = guildID