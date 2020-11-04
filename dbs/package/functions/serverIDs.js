const serverIDs = async (client, message, args, name, code) => {

    let r = code.split("$serverIDs[").length - 1

    let inside = code.split("$serverIDs[")[r].split("]")[0]

    if (!inside) {
        code = code.replaceLast("$serverIDs[]", client.guilds.cache.map(guild => guild.id).slice(0, 10).join(", "))

        return {
            code: code
        }

    } else {
        if (isNaN(inside) || Number(inside) < 1) return message.channel.send(`:x: Invalid number in \`$serverIDs[${inside}]\``)

        code = code.replaceLast(`$serverIDs[${inside}]`, client.guilds.cache.map(guild => guild.id).slice(0, Number(inside)).join(", "))

        return {
            code: code
        }
    }
}

module.exports = serverIDs;