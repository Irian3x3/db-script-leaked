const region = (client, message, args, name, code) => {

    code = code.replaceLast(`$region`, message.guild.region)

    return {
        code: code
    }
}

module.exports = region