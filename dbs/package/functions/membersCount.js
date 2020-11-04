const membersCount = async  (client, message, args, name, code) => {
  
  let r = code.split("$membersCount[").length - 1
  
  let presences = ["online", "offline", "idle", "dnd", "bot", "human"]
  
  let presence = code.split("$membersCount[")[r].split("]")[0]
  
  let inside = presence;
  
  if (presence && !presences.includes(presence)) return message.channel.send(`❌ Invalid presence in \`$membersCount[${presence}]\``)
  
  if (!presence) presence = "everyone"
  
  await message.guild.members.fetch()

let filter;
  if(inside === "bot" || inside === "human") {
    let res = (inside === "bot" ? true : false)
    filter = message.guild.members.cache.filter(member => member.user.bot === res).size
  } else {
  
  filter = message.guild.members.cache.filter(member => member.presence.status === (presence === "everyone" ? member.presence.status : presence)).size
  }


  code = code.replaceLast(`$membersCount[${inside}]`, filter) 
      
  return {
    code:code 
  } 
}

module.exports = membersCount