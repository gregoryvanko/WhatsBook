# WhatsBook
A Node.js application. WhatsBooks is your own Facebook

## Usage
First, install the package using npm:
```bash
npm install @gregvanko/whatsbook --save
```

## File App.js
Create a "App.js" file with this content:
```js
let Aquagreen = require('@gregvanko/whatsbook').Aquagreen
const Name = "WhatsBook"
const Port = 9002
const Debug = false
let MyApp = new Aquagreen(Name, Port, Debug)
MyApp.Start()
```