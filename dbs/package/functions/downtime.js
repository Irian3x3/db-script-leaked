const db = require("quick.db")

const ms = require("parse-ms")

const downtime = async (client, message, args, name, code) => {

    let started = await db.fetch("downtime_0") || 0

    let ended = await db.fetch("reconnect_0") || 0

    code = code.replaceLast("$downtime", Object.entries(ms(ended - started)).map((x, y) => {
        if (x[1] > 0 && y < 4) return `${x[1]}${x[0][0]}`
        else return ""
    }).join(""))

    

    return {
        code: code
    }
}

module.exports = downtime