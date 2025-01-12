const express = require('express');
const cors = require('cors');
const session = require('express-session');
const dotenv = require('dotenv');
const routes = require('./routes');

dotenv.config();

const app = express();

// Middleware check
app.use(express.json());
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true,
}));

app.use(session({
    secret: process.env.SESSION_SECRET || 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24, // 1 day
    },
}));

// Routes
app.use('/api', routes);

// Static Files (if serving frontend through backend)
app.use(express.static('./public'));

module.exports = app;
