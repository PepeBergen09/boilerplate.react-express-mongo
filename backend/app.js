const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require('cors');
const hbs = require('hbs');
const expressHbs = require('express-handlebars');
dotenv.config();

// db
// MONGO_URI=mongodb://localhost/nodeapi
mongoose
    .connect(
        process.env.MONGO_URI,
        { useNewUrlParser: true }
    )
    .then(() => console.log("DB Connected"));

mongoose.connection.on("error", err => {
    console.log(`DB connection error: ${err.message}`);
});

// bring in routes
const todoRoutes = require("./modules/todo/routes/tasks.routes");

//template engine
app.set('view engine', 'hbs');
app.engine('.hbs', expressHbs({ defaultLayout: 'layout', extname: '.hbs' }));
app.use(express.static(__dirname + '/public'));
// middleware
app.use(cors());
app.use(morgan("dev"));
app.use("/todo", todoRoutes);

module.exports = app;