const setNickname = async (client, message, args, name, code) =>{

    let r = code.split("$setNickname[").length - 1

    

   let inside = code.split("$setNickname[")[r].split("]")[0]

    let [userID, nick] = inside.split(";")

    let member = await message.guild.members.fetch(userID).catch({})

    let err = client.suppress.get(message.idd)

    if (!member && err === undefined) return message.channel.send(`:x: Invalid user ID in \`$setNickname[${inside}]\``)
    else if (!member && err !== undefined) return message.channel.send(err).catch(err => {})



       await member.setNickname(nick).catch(Err => {
if (err === undefined) return message.channel.send(`:x: Failed to change nickname. `)
       })

    code = code.replaceLast(`$setNickname[${inside}]`, "")

    return {
        code: code
    }
}

module.exports = setNickname