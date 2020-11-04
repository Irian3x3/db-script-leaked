const addCmdReactions = async (client, message, args, name, code) => {

    if (code.split("$addCmdReactions[").length >= 3) return message.channel.send(`:x: Cant use more than one $addCmdReaction.`)

    let inside = code.split("$addCmdReactions[")[1].split("]")[0]

    let emojis = inside.split(";")

    code = code.replaceLast(`$addCmdReactions[${inside}]`, "")

    emojis.map(async emoji => {
        await message.react(emoji).catch(err => message.channel.send(`:x: Failed to react with ${emoji}`))
    })
    
    return {
        code: code
    } 
}

module.exports = addCmdReactions
