const guildNames = async (client, message, args, name, code) => {

    let r = code.split("$guildNames[").length - 1

    let inside = code.split("$guildNames[")[r].split("]")[0]

    if (!inside) {
        code = code.replaceLast("$guildNames[]", client.guilds.cache.map(guild => guild.name.split("[").join("").split("]").join("")).slice(0, 10).join(", "))

        return {
            code: code
        }

    } else {

        let [number, separator] = inside.split(";")

        if (!separator) separator = ","

        if (isNaN(number) || Number(number) < 1) return message.channel.send(`:x: Invalid number in \`$guildNames[${inside}]\``)

        code = code.replaceLast(`$guildNames[${inside}]`, client.guilds.cache.map(guild => guild.name.split("[").join("").split("]").join("")).slice(0, Number(number)).join(separator))

        return {
            code: code
        }
    }
}

module.exports = guildNames