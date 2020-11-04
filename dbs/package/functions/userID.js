const userID = async (client, message, args, name, code) => {

    let r = code.split("$userID[").length - 1

    let inside = code.split("$userID[")[r].split("]")[0]

    let user = client.users.cache.find(user => user.username === inside)

    let err = client.suppress.get(message.idd)

    if(!user && err === undefined) return message.channel.send(`:x: Invalid user name in \`$userID[${inside}]\``)
    else if (!user && err !== undefined) return message.channel.send(err).catch(err => {})
    
    code = code.replaceLast(`$userID[${inside}]`, user.id)
    
    return {
        code: code
    }
}

module.exports = userID