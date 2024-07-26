"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const socket_io_1 = require("socket.io");
const http_1 = require("http");
const server = (0, http_1.createServer)();
const io = new socket_io_1.Server(server);
io.on('connection', () => {
    console.log('socket connected..');
});
server.listen(5001, () => {
    console.log("server started on PORT:", 5001);
});
