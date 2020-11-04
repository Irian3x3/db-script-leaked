const charCount = (client, message, args, name, code) => {

    code = code.replaceLast("$charCount", args.join(" ").length)

    return {
        code: code
    }
}

module.exports = charCount;