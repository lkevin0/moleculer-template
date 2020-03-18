---
@title[Tools]

### Tools
1. Visual Studio Code (Latest Version)
2. Homebrew (macOS)
3. Node.js (version 12 ขึ้นไป)
4. yarn 1.22+
5. TypeScript 3.8+
6. moleculer-cli 0.7.0+
7. Git
8. (Optional) Microsoft Account หรือ Github Account สำหรับการทำ VS Code Live Share

---
@title[Set up Visual Studio Code]

### Set up @color[#0C6EC9](Visual Studio Code)

1. Install [Visual Studio Code](https://code.visualstudio.com/download)
2. Install Extension [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) (Huachao Mao)

---
@title[Adding Visual Studio Code To The Command Line (macOS)]

#### Adding Visual Studio Code To The Command Line (macOS)
3. Launch @color[#0C6EC9](VS Code)
4. Open @color[#0C6EC9](Command Palette &#40;⇧⌘P&#41;)
5. Type 'shell command' to find
6. Select option

```
                Shell Command: Install 'code' command in PATH
```

---
@title[Setup Homebrew]

### Set up @color[#0C6EC9](Homebrew &#40;macOS&#41;)

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```
@css[text-05 text-gray](Double click text to Copy and Paste in a macOS Terminal)

---
@title[Set up Node.js (macOS)]

### Set up @color[#0C6EC9](Node.js) (macOS)

1. Open terminal
2. Run the following command:
```
                    brew install yarn
```

---
@title[Set up Node.js (Windows)]

### Set up @color[#0C6EC9](Node.js) (Windows)

1. Download and Install 🔗[Node.js](https://nodejs.org/en/download/)
    - Tool for Native Modules
        - ทำเครื่องหมาย ✅ Automatically install the necessary tools. Note that this will also install Chocolatey.
2. Open Powershell (Run as administrator)
3. Run the following command:

```
                choco install yarn
```

- (กรณีไม่ได้ติดตั้ง Chocolatey) Download and Install 🔗[yarn](https://classic.yarnpkg.com/en/docs/install#windows-stable)

---
@title[Set up TypeScript]

### Set up TypeScript

1. Open Terminal
2. Run the following command:

```
                    yarn global add typescript
```

---
@title[Setup moleculer-cli]

### Set up moleculer-cli

1. Open terminal
2. Run the following command:

```
                    yarn global add moleculer-cli
```

---
@title[Set up Git]
### Set up Git

macOS
```
                            brew install git
```

Windows

```
                            choco install git
```

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