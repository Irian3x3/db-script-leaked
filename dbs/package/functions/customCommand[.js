const db = require("quick.db")

const customCommand = async(client, message, args, name, code) => {

    if (code.split("$customCommand[").length >= 3) return message.channel.send(":x: Can't use more than one $customCommand.")

    let inside = code.split("$customCommand[")[1].split("]")[0]

    let [option, namee, codee] = inside.split(";")

    let customCmds = await db.fetch(`customCommands_${message.guild.id}`) || []

    let err = client.suppress.get(message.idd)

    if (option === "add") {
        if (!code && err === undefined) return message.channel.send(`:x: Command needs a code in \`$customCommand[${inside}]\``)
        else if (!code && err !== undefined) return message.channel.send(err).catch(err => {})

        customCmds.push({
            name: namee,
            code: codee
        })

        db.set(`customCommands_${message.guild.id}`, customCmds)
    } else {

        customCmds = customCmds.filter(cmd => cmd.name.toLowerCase() !== namee.toLowerCase())

        db.set(`customCommands_${message.guild.id}`, customCmds)

    }

    code = code.replaceLast(`$customCommand[${inside}]`, "")

    return {
        code: code
    }
}

module.exports = customCommand