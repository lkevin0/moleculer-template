---

# Moleculer
#### Microservice, The First Step

---
@title[Set up Visual Studio Code]

# Set up @color[#0C6EC9](Visual Studio Code)
1. Install [Visual Studio Code](https://code.visualstudio.com/download)
2. Install Extension Huachao Mao: [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)
3. On macOS, Open Command Palette (⇧⌘P)
4. Type 'shell command’ to find
        Shell Command: Install 'code' command in PATH
---

@css[heading](Set up @color[#0C6EC9](Homebrew &#40;macOS&#41;))

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```
@css[text-05 text-gray](Copy and Paste in a macOS Terminal)
---

@snap[north-east span-100 text-06 text-gray]
Live Code Presenting
@snapend

```js
var io = require('socket.io')(80);
var cfg = require('./config.json');
var tw = require('node-tweet-stream')(cfg);

tw.track('socket.io');
tw.track('javascript');

tw.on('tweet', function(tweet){
    io.emit('tweet', tweet);
});
```

@[1]
@[2,3]
@[5-10]

---?color=linear-gradient(100deg, white 50%, #567AD2 50%)

<iframe class="stretch" data-src="https://codesandbox.io/s/github/moleculerjs/sandbox-moleculer-api-routing/tree/master/?fontsize=14"></iframe>