const platform = async (client, message, args, name, code) => {

    let r = code.split("$platform[").length -1

    let inside = code.split("$platform[")[r].split("]")[0]

    let id = (inside ? inside: message.author.id)

    let user = client.users.cache.get(id)

    let err = client.suppress.get(message.idd)

    if (!user && err === undefined) return message.channel.send(`:x: Invalid user ID in \`$platform[${inside}]\``)
    else if (!user && err !== undefined) return message.channel.send(err).catch(err => {})
    
    let devices = user.presence.clientStatus 

    if (devices) devices = Object.entries(devices).map(devide => {
        
        if (devide[0]) return devide[0] 
        return ""
    }).filter(x => x !== "").join(", ")

    code = code.replaceLast(`$platform[${inside}]`, devices ? devices : "offline")

    return {
        code: code
    }
}

module.exports = platform