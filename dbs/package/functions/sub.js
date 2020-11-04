const sub = (client, message, args, name, code) => {
  
  let r = code.split("$sub[").length - 1
  
  let inside = code.split("$sub[")[r].split("]")[0]
  
  let n = inside.split(";").reduce((x, y) => Number(x) - Number(y), Number(inside.split(";")[0]) * 2)
 
  code = code.replaceLast(`$sub[${inside}]`, n)
  
  return {
    code: code, 
  } 
}

module.exports = sub