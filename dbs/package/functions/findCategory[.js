const findCategory = (client, message, args, name, code) => {
    let r = code.split("$findCategory[").length - 1

    let option = code.split("$findCategory[")[r].split("]")[0]

    let channel = message.guild.channels.cache.find(channel => (channel.name.toLowerCase() === option.trim().toLowerCase() || channel.id === option.trim()) && channel.type === "category") || 'false'

    code = code.replaceLast(`$findCategory[${option}]`, (channel ? channel.id : channel))

    return {
        code: code
    }
}

module.exports = findCategory;