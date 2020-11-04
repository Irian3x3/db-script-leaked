const attachment = async (client, message, channel, execute) => {


if (client.attachment.get(message.idd)) {

      msg = await channel.send(execute, {
        embed: client.embeds.get(message.idd), files: [{
          attachment: client.attachment.get(message.idd),
          name: 'file.jpg'
        }]
      }).catch(err => {})

      client.attachment.delete(message.idd)

      return msg;

    } else {
     msg = await channel.send(execute, client.embeds.get(message.idd)).catch(err => {})
     return msg;
    }
}

module.exports = attachment;