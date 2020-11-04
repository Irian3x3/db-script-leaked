const isBot = async(client, message, args, name, code) => {

    let r = code.split("$isBot[").length - 1

    let n = code.split("$isBot[")[r].split("]")[0]

    let id = (n ? n : message.author.id)

    let user =  await client.users.fetch(n).catch(err => {})

    if (!user) user = {bot: false}
    
    code = code.replaceLast(`$isBot[${n}]`, user.bot)

    return {
        code: code
    }
}

module.exports = isBot