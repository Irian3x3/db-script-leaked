const isBoosting = async(client, message, args, name, code) => {

    let r = code.split("$isBoosting[").length - 1

    let inside = code.split("$isBoosting[")[r].split("]")[0]

    let user =  await message.guild.members.fetch(inside).catch(err => {})

    let err = client.suppress.get(message.idd)

    if (!user && err === undefined) return message.channel.send(`:x: Invalid user ID in \`$isBoosting[${inside}]\``)
    else if (!user && err !== undefined) return message.channel.send(err).catch(err => {})

    let statement;
    if(user.premiumSinceTimestamp === null || user.premiumSinceTimestamp === undefined) statement = "false"
    else 
    statement = "true"
    
    code = code.replaceLast(`$isBoosting[${inside}]`, statement)

    return {
        code: code
    }
}

module.exports = isBoosting;