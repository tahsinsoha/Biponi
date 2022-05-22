console.log('Hello World')
const express = require("express");
const colors = require('colors')
const dotenv = require('dotenv').config()
const mongoose = require("mongoose");
const { errorHandler } = require('./middleware/errorMiddleware')
const upload = require('./routes/upload')
const connectDB = require('./config/db')
const Grid = require("gridfs-stream");
const port = 5000;

const app = express();

connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api/products', require('./routes/productRoutes'))
app.use(errorHandler)

const cors = require('cors');
app.use(cors());

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


let gfs;
const conn = mongoose.connection;
conn.once("open", function () {
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection("photos");
});

app.use("/file", upload);

// media routes
app.get("/file/:filename", async (req, res) => {
    try {
        const file = await gfs.files.findOne({ filename: req.params.filename });
        const readStream = gfs.createReadStream(file.filename);
        readStream.pipe(res);
    } catch (error) {
        res.send("not found");
    }
});

app.delete("/file/:filename", async (req, res) => {
    try {
        await gfs.files.deleteOne({ filename: req.params.filename });
        res.send("success");
    } catch (error) {
        console.log(error);
        res.send("An error occured.");
    }
});



app.listen(port, () => console.log(`Server started on port ${port}`));
