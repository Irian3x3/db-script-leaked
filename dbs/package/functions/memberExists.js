const memberExists = (client, message, args, name, code) => {

    let r = code.split("$memberExists[").length - 1

    let inside = code.split("$memberExists[")[r].split("]")[0]

    let member = message.guild.members.cache.get(inside)

    code = code.replaceLast(`$memberExists[${inside}]`, member ? true : false)
    
    return {
        code: code
    }
}

module.exports = memberExists;