console.log('Hello World')
const express = require("express");
const colors = require('colors')
const dotenv = require('dotenv').config()
const mongoose = require("mongoose");
const { errorHandler } = require('./middleware/errorMiddleware')
const upload = require('./routes/upload')
const connectDB = require('./config/db')
const Grid = require("gridfs-stream")
const bodyParser = require("body-parser")
const port = 5000;
const app = express();

connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api/products', require('./routes/productRoutes'))
app.use('/api/users', require('./routes/userRoutes'))
app.use(errorHandler)

const cors = require('cors');
app.use(cors());
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
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



 const conn = mongoose.connection;
// conn.once("open", function () {
//     gfs = Grid(conn.db, mongoose.mongo);
//     gfs.collection("photos");
// });

let gfs, gridfsBucket;
conn.once('open', () => {
    gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'photos'
    });

    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('photos');
})

app.use("/file", upload);

// media routes

app.get("/file/:filename", async (req, res) => {
    try {
         const file = await gfs.files.findOne({ filename: req.params.filename });
         console.log(file)
        // const readStream = gfs.createReadStream(file.filename);

        // // readStream.pipe(res);
        // res.send(readStream)

        const readStream = gridfsBucket.openDownloadStream(file._id);
        console.log(file)
        readStream.pipe(res);
    } catch (error) {
        console.log(error);
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
