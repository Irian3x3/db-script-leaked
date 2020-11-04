
const findUser = (client, message, args, name, code) => {
    let r = code.split("$findUser[").length - 1

    let option = code.split("$findUser[")[r].split("]")[0]

    let user = client.users.cache.get(option) || message.mentions.users.first() || client.users.cache.find(user => user.username.toLowerCase() === option.toLowerCase()) || 'false'

    code = code.replaceLast(`$findUser[${option}]`, user ? user.id : user)

    return {
        code: code
    }
}

module.exports = findUser