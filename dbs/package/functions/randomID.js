const randomID = (client, message, args, name, code) => {

    if (!code.includes("$randomID")) return { code: code }

    let member = message.guild.members.cache.random()

    code = code.split("$randomID").join(member.user.id)

    return {
        code: code
    }
}

module.exports = randomID