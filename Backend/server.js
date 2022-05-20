console.log('Hello World')

 const express = require("express");
 const dotenv = require('dotenv').config()
 const {errorHandler} = require('./middleware/errorMiddleware')
 const port = 5000;
 const app = express();
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use('/api/goals', require('./routes/goalRoutes'))
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
