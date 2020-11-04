const getAuditLog = async (client, message, args, name, code) => {

    let r = code.split("$getAuditLog[").length - 1

    let inside = code.split("$getAuditLog[")[r].split("]")[0]

    let [userID, option] = inside.split(";")

    let err = client.suppress.get(message.idd)

    if (!message.guild.me.hasPermission("VIEW_AUDIT_LOG") && err === undefined) return message.channel.send(`:x: Failed to get audit log entries. Missing permission.`)
    else if (!message.guild.me.hasPermission("VIEW_AUDIT_LOG") && err !== undefined) return message.channel.send(err).catch(err => {})
    if (!userID) userID = message.author.id 

    let user = (userID === "everyone" ? "everyone" : client.users.cache.get(userID))

    if (!user && err === undefined) return message.channel.send(`:x: Invalid user ID in \`$getAuditLog[${inside}]\``)
    else if (!user && err !== undefined) return message.channel.send(err).catch(err => {})

    let log;

    if (userID === "everyone") {
        logs = await message.guild.fetchAuditLogs()
        log = logs.entries.first()
    } else {
        let logs = await message.guild.fetchAuditLogs({
            user: user
        })
        log = logs.entries.first()
    }

    if (!log) return message.channel.send(`:x: Nothing found.`)

    let opt = {
        executor: (log.executer) ? log.executer.id : "None",
        target: (log.target) ? log.target.id : "None",
        action: log.action,
        reason: log.reason || ""
    }[option]

    if (opt === undefined && err === undefined) return message.channel.send(`:x: Invalid option in \`$getAuditLog[${inside}]\``)
    else if (opt === undefined && err !== undefined) return message.channel.send(err).catch(err => {})
    
    code = code.replaceLast(`$getAuditLog[${inside}]`, opt)

    return {
        code: code
    }
}

module.exports = getAuditLog