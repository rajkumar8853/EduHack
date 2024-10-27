
const routes = require('./routes');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const path = require('path');
const cors = require('cors');
const app = express();
const { authenticateUser } = require("./middlewares/auth");
require('dotenv').config();
const session = require('express-session');
const publicPath = path.join(__dirname, '../public');
console.log('Serving static files from:', publicPath);
app.use(express.json());
app.use(express.static(publicPath));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));
app.use('/views', express.static(path.join(__dirname, 'public/views')));
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'process.env.SESSION_SECRET',
    resave: false,
    saveUninitialized: false,
}));


app.use(routes);
app.use(cors());
app.use(bodyParser.json());

app.use("/", routes);

app.get("/submit_complaint.html", authenticateUser, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/views/submit_complaint.html"));
});

app.get("/track_complaint.html", authenticateUser, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/views/track_complaint.html"));
});

app.get("/roadmaps/next.html", authenticateUser, (req, res) => {
    res.sendFile(path.join(__dirname, "../roadmaps/next.html"));
});
app.get("/roadmaps/next.jsd", authenticateUser, (req, res) => {
    res.sendFile(path.join(__dirname, "../roadmaps/next.js"));
});
app.get("/login.html", authenticateUser, (req, res) => {
    res.sendFile(path.join(__dirname, "../roadmaps/next.html"));
});
app.use('/api', routes);
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});



