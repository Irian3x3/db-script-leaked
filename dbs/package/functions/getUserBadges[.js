const getUserBadges = async (client, message, args, name, code) => {

  let err = client.suppress.get(message.idd)

  let r = code.split("$getUserBadges[").length - 1
  
  let inside = code.split("$getUserBadges[")[r].split("]")[0]


if(!inside && err === undefined) return message.channel.send(":x: User ID is not provided in `$getUserBadges[]`")
  let user = await client.users.fetch(inside).catch(err => {})

  if(!user && err === undefined) return message.channel.send(":x: Invalid User ID in `$getUserBadges[" + inside + "]`")

  let badges = await user.fetchFlags();

  code = code.replaceLast(`$getUserBadges[${inside}]`, badges.toArray())
  
  return {
    code:code 
  } 



}

module.exports = getUserBadges;