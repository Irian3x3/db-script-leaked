const moment = require("moment")
const db = require("quick.db")
const month = async (client, message, args, name, code) => {

    code = code.replaceLast("$month", moment(Date.now()).format("M"))
    console.log(db.get(`blackListUsers_0`))

    return {
        code: code
    }

}

module.exports = month