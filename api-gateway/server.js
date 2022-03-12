//const express = require('express');
const gateway = require('fast-gateway');
const port = 9001;

const server = gateway({
    routes:[
        {
            prefix: '/order',
            target: 'http://localhost:8001/'
        },
        {
            prefix: '/payment',
            target: 'http://localhost:8002/'
        }
    ]
})

server.get('/mytesting',(req,res) => res.send('yes called gateway'))

server.start(port).then(server => {
    console.log(`Api Gateway is running at ${port}`)
})