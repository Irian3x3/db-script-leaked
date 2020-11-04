const randomString = async(client, message, args, name, code) => {
    
    if (!code.includes("$randomString[")) return { code: code }

    let r = code.split("$randomString[").length - 1

    let inside = code.split("$randomString[")[r].split("]")[0]

    let [amount, symbols] = inside.split(";")

    if (!symbols) symbols = "qwertyuiopñlkjhgfdsaz1029384756!·$%&/(=?¿xcvbnm"

    let err = client.suppress.get(message.idd)

    if (isNaN(amount) || Number(amount) < 1 && err === undefined) return message.channel.send(`:x: Invalid string length in \`$randomString[${inside}]\``)
    else if (isNaN(amount) || Number(amount) < 1 && err !== undefined) return message.channel.send(err).catch(err => {})
    else amount = Number(amount)

    let m = ""

    for (let i = 0;i < amount;i++) {
        let symbol = symbols[Math.floor(Math.random() * symbols.length)]

        if (Math.floor(Math.random() * 100) < 50) {
            m += symbol.toLowerCase()
        } else {
            m += symbol.toUpperCase()
        }
    }

    code = code.split(`$randomString[${inside}]`).join(m)
    
    return {
        code: code
    }
}

module.exports = randomString