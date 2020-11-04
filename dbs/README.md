# DISCORD BOT SCRIPT

```js
$ npm install discordbot-script
```
This package allows you to make your bot with similar language of bot designer for discord app but if you are not familiar with it then you can still use this package because its very simple to understand how everything works.

```js

const Dlang = require('discordbot-script')

const discordScript = require("discordbot-script")

const bot = new discordScript({
  token: "TOKEN",
  prefix: ["?"]
})

bot.MessageEvent()
 
bot.Command({
  name: "ping",
  code: `
 $ping
  `
})
```



### EVENTS
You can use events very easily and if you do not know what are events then they simply reacts when there is particular action is done like when someone joins the server then there is event for it, below is the exmaple.

```js
bot.JoinedCommand({
name: "channelID or variable",
code: `
something here like <@$authorID> thanks for joining the server!`
})
bot.onJoined()
```

### FUNCTIONS
Functions in discordbot-script helps you to perform task and provide the information, lets take a look at the example given below

```js
bot.Command({
  name: "clear",
  code: `Cleared $message[1] messages
  $clear[$message[1]]`
})
```

____









### DOCUMENTATION IS HERE : [DB-SCRIPT](https://www.db-script.xyz/)