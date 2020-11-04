const embed = require("../../package/embed.js")

const ms = require("ms")

const edit = require('../../package/bot/edit.js')
const addreactions_ = require("../../package/bot/addreactions.js")
const delete_ = require('../../package/bot/delete.js')

const interpret = require("../../package/interpreter.js")

const awaitReactions = async (client, message, args, name, code) => {

    if (code.split("$awaitReactions[").length >= 3) return message.channel.send(`:x: Cant use more than one $awaitReaction.`)

    let inside = code.split("$awaitReactions[")[1].split("]")[0]
    
    inside = await interpret(client, message, args, name, inside)
       
let pros = `$awaitCmdReactions[${inside}]`

        client.awaitReactions.set(message.idd, pros)

    code = code.replace(`$awaitReactions[${inside}]`, "")
    
    return {
        code: code
    }
}

module.exports = awaitReactions;