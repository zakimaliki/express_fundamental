const express = require('express');
const morgan = require('morgan')
const app = express();
const commonMiddle = require("./src/middleware/common")
const products =[
    {
    id : 1,
    name : "baju",
    stock: 10,
    price:30000
    },
    {
    id : 2,
    name : "kemeja",
    stock: 5,
    price:50000
    },
    
]

// const validate = (req,res,next) =>{
//     const stock = Number(req.body.stock)
//     if(isNaN(stock)){
//         res.json({
//             Message : "input must be number"
//         })
//     }
// }

app.use(express.json());

app.get('/products', (req,res, next) =>{
    res.send(products);
})

app.get('/products/:id', (req,res) =>{
    const id = Number(req.params.id);
    const product = products.find(product => product.id === id )
    res.send(product);
})

app.post('/products', commonMiddle, (req,res) =>{
    const {name,stock,price} = req.body;
    const productNew ={
        id : products.length + 1,
        name,
        stock,
        price
    }
    products.push(productNew);
    res.json({
        Message : "product created"
    })
    next()
})

app.put('/products/:id', (req,res) =>{
    const id = Number(req.params.id);
    const {name,stock,price} = req.body;
    const index = products.findIndex(product => product.id === id)
    const productUpdate ={
        id : products[index].id,
        name,
        stock,
        price
    }
    products[index] = productUpdate;
    res.json({
        Message : "product updated"
    }
)})

app.delete('/products/:id', (req,res) =>{
    const id = Number(req.params.id);
    const index = products.findIndex(product => product.id === id)
    products.splice(index,1);
    res.json({
        Message : "product deleted"
    });
})

app.listen(8080,()=>{
 console.log('server running on http://localhost:8080')
})