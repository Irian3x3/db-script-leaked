const hasPerm = async(client, message, args, name, code) => {

    let r = code.split("$hasPerm[").length - 1

    let inside = code.split("$hasPerm[")[r].split("]")[0]

    let [userID, perm] = inside.split(";")

    let perms = {
        admin: "ADMINISTRATOR",
        kick: "KICK_MEMBERS",
        ban: "BAN_MEMBERS",
        manageserver: "MANAGE_GUILD",
        managemessages: "MANAGE_MESSAGES",
        managenicknames: "MANAGE_NICKNAMES",
        viewauditlogs: "VIEW_AUDIT_LOG",
        manageroles: "MANAGE_ROLES",
        managechannels: "MANAGE_CHANNELS",
        sendmessages: "SEND_MESSAGES",
        readmessages: "READ_MESSAGES" ,
        changenickname: "CHANGE_NICKNAME"
    }
    
    if (!userID) userID = message.author.id;

    let member = message.guild.members.cache.get(userID)

    let err = client.suppress.get(message.idd)

    if (!member && err === undefined) return message.channel.send(`:x: Invalid user ID in \`$hasPerm[${inside}]\``)
    else if (!member && err !== undefined) return message.channel.send(err).catch(err => {})
    
    if (!perms[perm]) return message.channel.send(`:x: Invalid permission in \`$hasPerm[${inside}]\``)

    code = code.replaceLast(`$hasPerm[${inside}]`, member.hasPermission(perms[perm]))

    return {
        code: code
    }
} 

module.exports = hasPerm