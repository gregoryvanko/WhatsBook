let WhatsBook = require('./index').WhatsBook
const Name = "WhatsBookDev"
const Port = 5000
const Debug = true
let MyApp = new WhatsBook(Name, Port, Debug)
MyApp.Start()