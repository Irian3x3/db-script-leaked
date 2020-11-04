const activity = async (client, message, args, name, code) => {

    let r = code.split("$activity[").length - 1

    let inside = code.split("$activity[")[r].split("]")[0]

    let id = (inside ? inside : message.author.id)

    let user = client.users.cache.get(id)

    let err = client.suppress.get(message.idd)

    if (!user && err === undefined) return message.channel.send(`:x: Invalid user ID in \`$activity[${inside}]\``)
    else if (!user && err !== undefined) return message.channel.send(err).catch(err => {})
    
    let activities = user.presence.activities.length

    if (!activities) activities = "none"
    else activities = user.presence.activities.join(", ")

    code = code.replaceLast(`$activity[${inside}]`, activities)

    return {
        code: code
    }
}

module.exports = activity