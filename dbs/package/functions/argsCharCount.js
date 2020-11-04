const argsCharCount = (client, message, args, name, code) => {

    code = code.replaceLast("$argsCharCount", args.join(" ").length)

    return {
        code: code
    }
}

module.exports = argsCharCount;