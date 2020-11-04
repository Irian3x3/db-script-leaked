const botTyping = (client, message, args, name, code) => {

    message.channel.startTyping()

    setTimeout(() => {
        message.channel.stopTyping()    
    }, 5000);

    code = code.replaceLast(`$botTyping`, "")
    return {
        code: code
    }
}

module.exports = botTyping