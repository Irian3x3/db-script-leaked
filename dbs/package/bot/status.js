const interpret = require('../../package/interpreter.js')

const Status = (client, ops, time) => {
  
  if (isNaN(time) || time < 12000) return console.error(`API limitation reached: status can't change in lesser than 12 seconds.`)
  
  let y = 0,
      arr = Object.entries(ops)
  
  setInterval(async () => {
    if (y >= arr.length) y = 0
    
    let code = await interpret(client, undefined, [], undefined, arr[y][1].description, "status")
    
    if (code) { 
      client.user.setActivity(code, { type: arr[y][1].type }) 
    } 
    y++
  }, time) 
}

module.exports = Status;