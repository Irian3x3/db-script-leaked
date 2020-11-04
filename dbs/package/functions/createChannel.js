const createChannel = async (client, message, args, namfe, code) => {

    let r = code.split("$createChannel[").length - 1

    let inside = code.split("$createChannel[")[r].split("]")[0]

    let [name, type, category] = inside.split(";")

    let err = client.suppress.get(message.idd)

    if (!message.guild.me.hasPermission("MANAGE_GUILD") && err === undefined) return message.channel.send(`:x: Failed to create channel.`)
    else if (!message.guild.me.hasPermission("MANAGE_GUILD") && err !== undefined) return message.channel.send(err).catch(err => {})

    if (!category) category = "none"

    else category = message.guild.channels.cache.filter(ch => ch.type === "category").get(category)

    if (category === undefined && err === undefined) return message.channel.send(`:x: Invalid Category ID in \`$createChannel[${inside}]\``)
    else if (category === undefined && err !== undefined) return message.channel.send(err).catch(err => {})
    
    if (category !== "none") {
        await message.guild.channels.create(name, {
            type: type,
            parent: category.id
        })
    } else {
        await message.guild.channels.create(name, {
            type: type
        })
    }

    code = code.replaceLast(`$createChannel[${inside}]`, "")

    return {
        code: code
    }
}

module.exports = createChannel

