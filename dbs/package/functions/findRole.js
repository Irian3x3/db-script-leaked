const findRole = (client, message, args, name, code) => {
    let r = code.split("$findRole[").length - 1

    let option = code.split("$findRole[")[r].split("]")[0]

    let role = message.guild.roles.cache.get(option) || message.mentions.roles.first() || message.guild.roles.cache.find(role => role.name.toLowerCase() === option.trim().toLowerCase()) || "false"

    code = code.replaceLast(`$findRole[${option}]`, (role ? role.id : role))

    return {
        code: code
    }
}

module.exports = findRole