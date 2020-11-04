
const translate = require('@vitalets/google-translate-api');
const detectLang = async(client, message, args, name, code) => {

    let r = code.split("$detectLang[").length - 1

     let inside = code.split("$detectLang[")[r].split("]")[0]


     if(!inside) return message.channel.send(":x: Text is not provided to detect in `$detectLang[]`")

const language = await translate(inside);


 code = code.replace(`$detectLang[${inside}]`, language.from.language.iso)
    return {
    code: code 
  } 
}

module.exports = detectLang;