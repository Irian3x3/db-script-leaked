const isNSFW = async (client, message, args, name, code) => {

    let r = code.split("$isNSFW[").length - 1

    let n = code.split("$isNSFW[")[r].split("]")[0]

    if(!n) return message.channel.send(":x: Channel ID is not provided in `$isNSFW[]`")


    let channel = await message.guild.channels.cache.get(n)

    if(!channel) return message.channel.send(":x: Invalid ID in `$isNSFW[" + n + "]`")

    code = code.replaceLast(`$isNSFW[${n}]`, channel.nsfw ? true : false)

    return {
        code: code
    }
}

module.exports = isNSFW;