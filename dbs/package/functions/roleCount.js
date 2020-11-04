const roleCount = async (client, message, args, name, code) => {

    code = code.replaceLast("$roleCount", message.guild.roles.cache.size)

    return {
        code: code
    }
}

module.exports = roleCount