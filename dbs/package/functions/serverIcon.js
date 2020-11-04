const serverIcon = (client, message, args, name, code) => {

    code = code.replaceLast("$serverIcon", message.guild.iconURL() || "")

    return {
        code: code
    }
}

module.exports = serverIcon