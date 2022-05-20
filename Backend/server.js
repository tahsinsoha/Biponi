console.log('Hello World')

 const express = require("express");
 const dotenv = require('dotenv').config()
 const port = process.env.PORT || 5000;
 const app = express();
// //Middlewares
// app.use("/posts", () => {
//     console.log("This is a middleware running");
//   });

// //Routes
// app.get("/", (req, res) => {
//   res.send("We are home");
// });

// app.get("/posts", (req, res) => {
//     res.send("We are on posts");
//   });

 app.listen(port , () => console.log(`Server started on port ${port}`));
