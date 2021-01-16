# WhatsBook
WhatsBooks is your own Facebook with NodeJs

## Usage
First, install the package using npm:
```bash
npm install @gregvanko/whatsbook --save
```

## File App.js
Create a "App.js" file with this content:
```js
let MyWhatsBookApp = require('./index').WhatsBook
const Name = "WhatsBook"
const Port = 5000
const Debug = true
let MyApp = new MyWhatsBookApp(Name, Port, Debug)
MyApp.Start()
```