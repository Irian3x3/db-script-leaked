const serverVerificationLvl = (client, message, args, name, code) => {

   

    code = code.replaceLast("$serverVerificationLvl", message.guild.verificationLevel)

    return {
        code: code
    }
}

module.exports = serverVerificationLvl