
const { MessageAttachment } = require('discord.js');

const addAttachment = async (client, message, args, name, code) => {

if (code.split("$addAttachment[").length >= 3) return message.channel.send(`:x: Cant use more than one $addAttachment`)


let inside = code.split("$addAttachment[")[1].split("]")[0]

if(!inside) return message.channel.send(":x: Nothing is provided in `$addAttachment[]`")


client.attachment.set(message.idd, inside)


code = code.replaceLast(`$addAttachment[${inside}]`, "")

return {
        code: code
    } 

}

module.exports = addAttachment;