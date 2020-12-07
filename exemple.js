let MyWhatsBookApp = require('./index').WhatsBook
const Name = "WhatsBookDev"
const Port = 5000
const Debug = true
let MyApp = new MyWhatsBookApp(Name, Port, Debug)
MyApp.Start()