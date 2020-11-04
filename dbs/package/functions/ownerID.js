const ownerID = (client, message, args, name, code) => {

    code = code.replaceLast("$ownerID", message.guild.owner.id)

    return {
        code: code
    }
}

module.exports = ownerID