// require('dotenv').config()
const express = require('express');
const morgan = require('morgan')
const app = express();
const commonMiddle = require("./src/middleware/common")
const productRouter = require('./src/routes/product')
const categoryController = require('./src/controller/category')
// const categoryRouter = require('./src/routes/category')


app.use(express.json());
app.use(morgan('dev'));
// app.use(cors())

app.use('/products', productRouter )
// app.use('/category', categoryRouter )

app.get('/category',categoryController.getAllCategory)
app.get('/category/:id',categoryController.getCategory)
// app.post('/category',categoryController.insert)
// app.put('/category/:id',categoryController.update)
// app.delete('/category/:id',categoryController.delete)
// app.use((err,req,res,next)=>{
//   const messageError = err.message || "internal server error"
//   const statusCode = err.status || 500

//   res.status(statusCode).json({
//     message : messageError
//   })

// })


app.listen(8080, () => {
  console.log(`server running on http://localhost:8080`)
})