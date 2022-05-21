console.log('Hello World')

 const express = require("express");
 const colors = require('colors')
 const dotenv = require('dotenv').config()
 const {errorHandler} = require('./middleware/errorMiddleware')
 const connectDB = require('./config/db')
 const port = 5000;
 connectDB()
 const app = express();
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use('/api/products', require('./routes/productRoutes'))
app.use(errorHandler)
// //Middlewares
// app.use("/posts", () => {
//     console.log("This is a middleware running");
//   });
// //Routes
// app.get("/api/goals", (req, res) => {
//   res.send("We are api");
// });

// app.get("/posts", (req, res) => {
//     res.send("We are on posts");
//   });

 app.listen(port , () => console.log(`Server started on port ${port}`));
