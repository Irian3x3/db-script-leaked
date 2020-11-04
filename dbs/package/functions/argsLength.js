const argsLength = (client, message, args, name, code) => {

    code = code.replaceLast("$argsLength", args.length)

    return {
        code: code
    }
}

module.exports = argsLength