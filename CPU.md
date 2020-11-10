# CPU
Oh, so they deleted `$cpu`?  
> [![](https://cdn.discordapp.com/attachments/775501959242579989/775701685632761857/Screenshot_796.png)](https://www.db-script.xyz/npm-updates#update-1-8-0-10-18-2020)  

Well, for a matter of fact you can still access it with this code:
```js
const os = require('os');
const cpu = ((os.freemem()) * 100 / os.totalmem()).toFixed(2)
```
*Make sure this code is **above** your command, or else it'll say `ReferenceError: Cannot access 'cpu' before initialization`*  
And inside of your command put `${cpu}` in the code. You should now have access to CPU even though it was deleted.
