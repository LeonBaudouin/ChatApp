import io from 'socket.io-client'
import store from '../store'

export default class Socket {

    static SERVER = 'https://bddi-2019-chat.herokuapp.com/'

    static USER_REGISTER = 'user register'
    static SEND_MESSAGE = 'message new'
    
    static REGISTER_CONFIRMATION = 'user registered'
    static RECEIVE_MESSAGE = 'message new'
    static MESSAGE_UPDATE = 'message update'
    static ERROR = 'chat error'
    static USER_TYPING = 'user typing'
    static USER_UPDATE = 'users update'
    
    static IO = null

    static Init() {
        Socket.IO = io(Socket.SERVER)

        Socket.IO.on(Socket.MESSAGE_UPDATE, (messages) => {
            store.messages = messages
        })

        Socket.IO.on(Socket.RECEIVE_MESSAGE, ({message}) => {
            store.messages.push(message)
        })
        
        Socket.IO.on(Socket.USER_TYPING, (data) => {
            store.userTyping = data
        })

        Socket.IO.on(Socket.USER_UPDATE, ({users, type, user}) => {
            if (store.users.length == 0) store.users = users
            else if (type == 'join') store.users.push(user)
            else if (type == 'left') {
                const index = store.users.reduce((a, c, i) => c.username == user.username ? i : a, -1)
                if (index != -1) store.users.splice(index, 1)
            }
        })
    }

    static getIO() {
        if (Socket.IO == null) {
            throw 'The socket hasn\'t been initialised'
        }
        return Socket.IO
    }

    static userRegister(user) {
        const io = Socket.getIO()
        io.emit(Socket.USER_REGISTER, user)
        return new Promise((resolve, reject) => {
            let resolved = false
            io.on(Socket.REGISTER_CONFIRMATION, () => {
                if (resolved) return
                sessionStorage.setItem('user', JSON.stringify(user))
                store.user = user
                store.isRegistered = true
                resolve()
                resolved = true
            })
            io.on(Socket.ERROR, (error) => {
                if (error.code < 200 && error.code >= 100 && !resolved) {
                    reject(error)
                    resolved = true
                }
            })
        })
    }

    static registerFromSession() {
        const user = JSON.parse(sessionStorage.getItem('user'))
        if (user) this.userRegister(user)
    }

    static sendMessage(text) {
        const io = Socket.getIO()
        io.emit(Socket.SEND_MESSAGE, text)
        return new Promise((resolve, reject) => {
            let resolved = false
            io.on(Socket.RECEIVE_MESSAGE, ({message}) => {
                if (text == message.text && !resolved) {
                    resolve()
                    resolved = true
                }
            })
            io.on(Socket.ERROR, (error) => {
                if (error.code >= 200 && !resolved) {
                    reject(error)
                    resolved = true
                }
            })
        })
    }

    static logout() {
        sessionStorage.clear()
        store.user = null
        store.isRegistered = false
    }
}