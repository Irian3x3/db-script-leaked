const numberSeparator = async (client, message, args, name, code) => {

  let r = code.split("$numberSeparator[").length - 1

  let inside = code.split("$numberSeparator[")[r].split("]")[0]

  let [number, pattern] = inside.split(";")

  

  if (!number) return message.channel.send(`:x: Number is not provided in \`$numberSeparator[${inside}]\``)

  code = code.replaceLast(`$numberSeparator[${inside}]`, commafy(number, pattern))

  return {
    code: code
  }
}

function commafy(num, pattern) {
  var str = num.toString().split('.');
  if (str[0].length >= 4) {
    str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, `$1${pattern}`);
  }
  if (str[1] && str[1].length >= 4) {
    str[1] = str[1].replace(/(\d{3})/g, '$1 ');
  }
  return str.join('.');
}


module.exports = numberSeparator;