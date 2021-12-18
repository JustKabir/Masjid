const express = require('express');
const app = express();
const Port = 8000;
const morgan = require('morgan');
const mongoose = require('mongoose');
const {MONGOURI} = require('./keys');
const cookieParser = require('cookie-parser');

// Mongoose Connection
mongoose.connect(MONGOURI, 
  {
    useNewUrlParser: true, 
    useUnifiedTopology:true
  });
mongoose.connection.on("connected", ()=>{
    console.log("Successfully connected to database");
  });
mongoose.connection.on("error", (error)=>{
    console.log(error);
  });


  // HBS Setup
const path = require("path");
hbs = require('hbs');
const template_path = path.join(__dirname, './templates/views');
const partials_path = path.join(__dirname, './templates/partials');
hbs.registerPartials(partials_path);
app.set("views", template_path);
app.set("view engine", "hbs");


// Models
require('./models/user');
require('./models/home');
require('./models/news');
// require('./models/question');
// require('./models/answer');
// require('./models/request');
// require('./models/room');


// Middleware
// morgan is used for logging  status codes
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
// 2nd Argument helps us make the  homeUploads folder static
// 1st Arg helps us eliminate the /homeUploads from the path of the image
app.use('/homeUploads',express.static('homeUploads'))
app.use('/newsUploads',express.static('newsUploads'))
app.use(cookieParser());


// ROUTES
const adminRoutes = require('./routes/admin');
const homeRoutes = require('./routes/home');
const authRoutes = require('./routes/auth');
const dashboardRoutes = require('./routes/dashboard');
const newsRoutes = require('./routes/news');
// const roomRoutes = require('./routes/room');


// Routes Middleware
app.use('/home', homeRoutes);
app.use('/admin', adminRoutes);
app.use('/admin/dashboard', dashboardRoutes);
app.use('/', authRoutes);
app.use('/admin/dashboard', newsRoutes);
// app.use('/room', roomRoutes);

/** catch 404 and forward to error handler */
app.use('*', (req, res) => {
  return res.status(404).json({
    success: false,
    message: 'API endpoint doesnt exist'
  })
});



// Server Init
app.listen(Port,()=>{
    console.log(`Server is running on ${Port}`)
});            