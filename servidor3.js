var PORT = 4997

var express = require('express')
var aplication = express();

const net=require('net')
const server = require('http').Server(aplication)
const socket = require('socket.io')(server)
    const {StringDecoder} = require('string_decoder')
    const decoder = new StringDecoder('utf8')

var HOST = "servredes.hopto.org"

var ser = net.createServer(function(so){

    console.log('Nuevo Usuario ' + so.remoteAddress + ':' + so.remotePort)

    so.on('data',function(data){
        var cent = data

        so.write("servidor 3");
        console.log(decoder.write(cent));
    })

    so.on('close',function(){
        console.log('usuario desconectado')
    })
})

ser.listen(PORT,function(){
    console.log("server3 up")
})