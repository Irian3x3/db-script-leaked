
const interpreter = require("../../package/interpreter.js")


const addReactions = async (client, message, args, name, code) => {

    if (code.split("$addReactions[").length >= 3) return message.channel.send(`:x: Cant use more than one $addReaction.`)

    let inside = code.split("$addReactions[")[1].split("]")[0]
    
    
    let emojis = inside.split(";")

    code = code.replaceLast(`$addReactions[${inside}]`, "")
    
    client.addReactions.set(message.idd, emojis)
    
    
    
    return {
        code: code
    } 

}

module.exports = addReactions;