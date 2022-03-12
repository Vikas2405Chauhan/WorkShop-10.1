const express = require('express');
const app = express();

const port = 8001;

app.get('/order-list',(req,res) => {
    let response = {
        data:{
            item: [
                {
                    id: 1, name:'order 1'
                },
                {
                    id:2, name:'order 2'
                }
            ]
        }
    }
    res.status(200).json(response)
})

app.get('/',(req,res) => {
    res.status(200).json({message:"Order Called"})
})

app.listen(port, () => {
    console.log(`Order Service is running at http://localhost:${port}`)
})