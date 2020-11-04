const ms = require("parse-ms")

const uptime = (client, message, args, name, code) => {

    code = code.replaceLast("$uptime", Object.entries(ms(client.uptime)).map((x, y) => {
        if (x[1] > 1 && y < 4) return `${x[1]}${x[0][0]}`
        else return ""
    }).join(""))

    return {
        code: code
    }
}

module.exports = uptime