const roleExists = (client, message, args, name, code) => {

    let r = code.split("$roleExists[").length - 1

    let inside = code.split("$roleExists[")[r].split("]")[0]

    let role = message.guild.roles.cache.get(inside) || message.guild.roles.cache.find(role => role.name === inside)

    code = code.replaceLast(`$roleExists[${inside}]`, role ? true : false)
    
    return {
        code: code
    }
}

module.exports = roleExists