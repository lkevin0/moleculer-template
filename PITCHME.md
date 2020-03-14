---

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.

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