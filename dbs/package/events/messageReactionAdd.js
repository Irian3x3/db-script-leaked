const db = require("quick.db")

const ReactionAdd = async (client, reaction, user) => {

    let reactionRoles = await db.fetch("reactionRoles_0") || []

    let message = reaction.message

    if (message.channel.type === "dm") return

    let member = message.member

    let reactionRole = reactionRoles.find(info => info.messageID === message.id)

    if (!reactionRole) return

    let roles = reactionRole.roles
    
    let role
    
    Object.entries(roles).map(x => {
      if (x[0].includes(reaction.emoji.id)) role = x[1]
    })
  
  if (!role) return

  member.roles.add(role).catch(err => {})
}

module.exports = ReactionAdd;