const moment = require("moment")

const day = (client, message, args, name, code) => {

    code = code.replaceLast("$day", moment(Date.now()).format("D"))

    return {
        code: code
    }
}

module.exports = day