const channelExists = (client, message, args, name, code) => {

    let r = code.split("$channelExists[").length - 1

    let inside = code.split("$channelExists[")[r].split("]")[0]

    let channel = client.channels.cache.get(inside)

    code = code.replaceLast(`$channelExists[${inside}]`, channel ? true : false)
    
    return {
        code: code
    }
}

module.exports = channelExists