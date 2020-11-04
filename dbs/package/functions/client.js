const client = async (client, message, args, name, code) => {

 let r = code.split("$client[").length - 1

    let inside = code.split("$client[")[r].split("]")[0]

 if(!inside) return message.channel.send(":x: Property is not provided in `$client[]`")

 let options = {
   name: client.user.username,
   id: client.user.id,
   discriminator: client.user.discriminator,
   avatarURL: client.user.displayAvatarURL(),
   status: client.presence.status,
   activity: "None"
 }


 if(client.presence.activities[0]) {
   options.activity = client.presence.activities[0].name
 }

 if(!options[inside]) return message.channel.send(`:x: Invalid Option in \`$client[${inside}]\``);

  code = code.replaceLast(`$client[${inside}]`, options[inside])

    return {
        code: code
    }

}

module.exports = client;