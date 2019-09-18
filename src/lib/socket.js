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
            store.$data.messages = messages
        })

        Socket.IO.on(Socket.RECEIVE_MESSAGE, ({message}) => {
            store.$data.messages.push(message)
        })
        
        Socket.IO.on(Socket.USER_TYPING, (data) => {
            store.$data.userTyping = data
        })

        Socket.IO.on(Socket.USER_UPDATE, ({users}) => {
            store.$data.users = users
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
            io.on(Socket.REGISTER_CONFIRMATION, () => {
                sessionStorage.setItem('user', JSON.stringify(user))
                store.$data.user = user
                store.$data.isRegistered = true
                resolve
            })
            io.on(Socket.ERROR, (error) => {
                if (error.code < 200 && error.code >= 100) {
                    reject(error)
                }
            })
        })
    }

    static registerFromSession() {
        const user = JSON.parse(sessionStorage.getItem('user'))
        if (user) {
            this.userRegister(user)
        }
    }

    static sendMessage(text) {
        const io = Socket.getIO()
        io.emit(Socket.SEND_MESSAGE, text)
        return new Promise((resolve, reject) => {
            io.on(Socket.RECEIVE_MESSAGE, ({message: {receivedText}}) => {
                if (text == receivedText) resolve()
            })
            io.on(Socket.ERROR, (error) => {
                if (error.code >= 200) reject(error)
            })
        })
    }
}