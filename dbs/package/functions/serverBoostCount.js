const serverBoostCount = (client, message, args, name, code) => {

    code = code.replaceLast("$serverBoostCount", message.guild.premiumSubscriptionCount)

    return {
        code: code
    }
}

module.exports = serverBoostCount