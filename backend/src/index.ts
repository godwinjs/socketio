const express = require('express')
import { Server } from 'socket.io'
import { createServer } from 'http'

const server = createServer()
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        credentials: true,
        methods: ['POST', 'GET']
    }
})

io.on('connection', () => {
    console.log('socket connected..')
})

server.listen( 5001, () => {
    console.log("server started on PORT:", 5001)
})