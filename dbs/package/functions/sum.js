const sum = (client, message, args, name, code) => {
  
  let r = code.split("$sum[").length - 1
  
  let inside = code.split("$sum[")[r].split("]")[0]
  
  let n = inside.split(";").reduce((x, y) => Number(x) + Number(y), 0)

  code = code.replaceLast(`$sum[${inside}]`, n)
  
  return {
    code:code 
  } 
}

module.exports = sum