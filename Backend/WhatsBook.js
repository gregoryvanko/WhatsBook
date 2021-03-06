class WhatsBook{
    constructor(MyApp){
        this._MyApp = MyApp
    }

    /**
     * Socket API de la page WhatsBook
     * @param {Object} Data Object envoyé par SocketIO : Data.Action, Data.Value
     * @param {Socket} Socket SocketIO
     * @param {String} User Nom du user
     * @param {String} UserId Id du user
     */
    Api(Data, Socket, User, UserId){
        this._MyApp.LogAppliInfo("SoApi WhatsBook Data:" + JSON.stringify(Data), User, UserId)
        switch (Data.Action) {
            case "Start":
                this.Start(Data.Value, Socket, User, UserId)
                break
            default:
                this._MyApp.LogAppliError(`Api WhatsBook error, Action ${Data.Action} not found`, User, UserId)
                Socket.emit("PlayerError", `Api WhatsBook error, Action ${Data.Action} not found`)
                break
        }
    }

    /**
     * Message envoyé par le client lors du strat de l'application
     * @param {String} Value Valeur envoyé par le client
     * @param {Socket} Socket SocketIO
     * @param {String} User nom du user
     * @param {String} UserId Id du user
     */
    Start(Value, Socket, User, UserId){
        Socket.emit("WhatsBookError", `ToDo Start Action on server`)
    }
}
module.exports.WhatsBook = WhatsBook