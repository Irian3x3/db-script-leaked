const Discord = require('discord.js')

const client = new Discord.Client()

const db = require("quick.db")

client.server = new Discord.Collection()
client.editIn = new Discord.Collection()
client.commands = new Discord.Collection()
client.spaceCommands = new Discord.Collection()
client.vars = new Discord.Collection()
client.joined = new Discord.Collection()
client.leave = new Discord.Collection()
client.deleteIn = new Discord.Collection()
client.channel = new Discord.Collection()
client.botLeave = new Discord.Collection()
client.executableCommands = new Discord.Collection()
client.botJoin = new Discord.Collection()
client.awaitedCommands = new Discord.Collection()
client.deletedCommands = new Discord.Collection()
client.embeds = new Discord.Collection()
client.attachment = new Discord.Collection()
client.addReactions = new Discord.Collection()
client.awaitReactions = new Discord.Collection()
client.ready = new Discord.Collection()
//client.presencess = new Discord.Collection()
client.suppress = new Discord.Collection()
client.logs = []


const botLeave = require("../../package/events/onBotLeave.js")
const botJoin = require("../../package/events/onBotJoin.js")
const Status = require('../../package/bot/status.js')
const Message = require('../../package/events/message.js')
const Joined = require('../../package/events/guildMemberAdd.js')
const Leave = require('../../package/events/guildMemberRemove.js')
const LoopCommand = require("../../package/bot/loop.js")
const deletedMessage = require("../../package/events/messageDelete.js")
//const PresenceUpdate = require("../../package/events/presenceUpdate.js")
const Ready = require("../../package/events/onReady.js")
const CacheReactions = require("../../package/bot/cacheReactionRoles.js")
const MessageReactionAdd = require("../../package/events/messageReactionAdd.js")
const MessageReactionRemove = require("../../package/events/messageReactionRemove.js")

class DiscordLang {
  constructor(ops) {

    if (!ops.token) return console.error(`Invalid token given!`)

    if (!ops.prefix) return console.error(`Invalid prefix given!`)

    if (typeof ops.prefix !== "object") return console.error(`Prefix must be an array! Example: ["!", "?"]`)

    this.prefix = ops.prefix

    client.login(ops.token)

    client.on("ready", async () => {
      console.log(`Ready on client ${client.user.tag}`)
      if (await db.fetch("downtime_0") !== null) db.set("reconnect_0", Date.now())
      if (client.ready.size) {
        Ready(client)
      }
      CacheReactions(client)
    })

    client.on("messageReactionAdd", async (reaction, user) => {
      MessageReactionAdd(client, reaction, user)
    })

    client.on("messageReactionRemove", async (reaction, user) => {
      MessageReactionRemove(client, reaction, user)
    })

    client.on("reconnect", () => {
      db.set("downtime_0", Date.now())
    })

    client.on("disconnect", () => {
      db.set("downtime_0", Date.now())
    })
  }

  /*PresenceCommand(ops) {
    if (!ops.name) return console.error(`Ready Command needs a name (channel id)!`)
    if (!ops.user) return console.error("Presence Command needs a user ID!")
    if (!ops.code) return console.error(`Ready Command needs a code!`)
    client.presencess.set(ops.name, ops)
  }*/

  Variables(ops) {
    if (typeof ops !== "object") return console.error(`Variable must be an object!`)

    Object.entries(ops).map(x => {
      client.vars[x[0]] = x[1]
    })
  }

  /*onPresenceUpdate() {
    client.on("presenceUpdate", member => {
      PresenceUpdate(client, member)
    })
  }*/
  ExecutableCommand(ops) {
    ops = Array.from(arguments);


    ops.forEach(x => {
      if (!x.name) return console.error(`Command needs a name!`)
      if (!x.code) return console.error(`Command needs a code!`)


      client.executableCommands.set(x.name, x)

    })

  }

  ReadyCommand(ops) {
    if (!ops.name) return console.error(`Executable Command needs a name!`)
    if (!ops.code) return console.error(`Executable Command needs a code!`)
    client.ready.set(ops.name, ops)
  }

  BotLeaveCommand(ops) {

    if (!ops.name) return console.error(`Bot leave Command needs a name!`)
    if (!ops.code) return console.error(`Bot leave Command needs a code!`)
    client.botLeave.set(ops.name, ops)

  }

  AwaitedCommand(ops) {
    ops = Array.from(arguments);


    ops.forEach(x => {
      if (!x.name) return console.error(`Command needs a name!`)
      if (!x.code) return console.error(`Command needs a code!`)


      client.awaitedCommands.set(x.name, x)

    })



  }

  LoopCommand(ops, time) {

    if (!ops.name) return console.error("Loop command needs a name")
    else if (!ops.code) return console.error("Loop command needs a code")
    else if (!time) return console.error("Loop command needs an interval!")

    if (isNaN(time)) return console.error("The interval must be milliseconds.")

    LoopCommand(client, ops, time)
  }

  BotJoinCommand(ops) {
    ops = Array.from(arguments);


    ops.forEach(x => {
      if (!x.name) return console.error(`Bot join Command needs a name!`)
      if (!x.code) return console.error(`Bot join Command needs a code!`)
      client.botJoin.set(x.name, x)

    })

  }

  MessageDeleteCommand(ops) {
    ops = Array.from(arguments);
    ops.forEach(x => {
      if (!x.name) return console.error(`Deleted message command needs a name!`)
      if (!x.code) return console.error(`Deleted message command needs a code!`)
      client.deletedCommands.set(x.name, x)

    })
  }

  JoinedCommand(ops) {
    ops = Array.from(arguments);
    ops.forEach(x => {
      if (!x.name) return console.error(`Joined Command needs a name!`)
      if (!x.code) return console.error(`Joined Command needs a code!`)
      x.id = Math.floor(Math.random() * 39022439082982882223)
      client.joined.set(x.id, x)

    })
  }

  Command(ops) {

    ops = Array.from(arguments);

    if (!ops) return;


    ops.forEach(x => {
      if (!x.name) return console.error(`Command needs a name!`)
      if (!x.code) return console.error(`Command needs a code!`)

      let check = client.commands.get(x.name)
      if (check) {
        check.code.push(x.code)
      } else {
        x.code = [x.code]
        check = x;
      }


      client.commands.set(check.name, check)

    })




  }
  

  SpaceCommand(ops) {

    ops = Array.from(arguments);

    ops.forEach(x => {
      if (!x.name) return console.error(`Space command needs a name!`)
      if (!x.code) return console.error(`Space command needs a code!`)

      client.spaceCommands.set(x.name, x)
    })
  }

  MessageEvent() {
    client.on("message", async message => {

      Message(client, message, this.prefix)
    })
  }

  LeaveCommand(ops) {
    ops = Array.from(arguments);

    ops.forEach(x => {
      if (!x.name) return console.error(`Leave Command needs a name.`)
      if (!x.code) return console.error(`Leave Command needs a code.`)
      x.id = Math.floor(Math.random() * 39022439082982882223)
      client.leave.set(x.id, x)
    })
  }

  onLeave() {
    client.on("guildMemberRemove", async member => {
      await Leave(client, member)
    })
  }

  onJoined() {
    client.on("guildMemberAdd", async member => {
      await Joined(client, member)
    })
  }
  Status(ops, time) {
    Status(client, ops, time)
  }

  onBotLeave() {
    client.on("guildDelete", async guild => {
      await botLeave(client, guild)
    })
  }
  onBotJoin() {
    client.on("guildCreate", async guild => {
      await botJoin(client, guild)
    })
  }

  onMessageDelete() {
    client.on("messageDelete", async (message) => {
      await deletedMessage(client, message)
    })
  }

  MessageEditEvent() {
    client.on("messageUpdate", async (omsg, message) => {
      if (omsg.content === message.content) return
      await Message(client, message, this.prefix)
    })
  }


}

module.exports = DiscordLang