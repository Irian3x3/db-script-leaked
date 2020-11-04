const ping = (client, message, args, name, code) => {

    code = code.replaceLast("$ping", Date.now() - message.createdTimestamp)

    return {
        code: code
    }
}

module.exports = ping