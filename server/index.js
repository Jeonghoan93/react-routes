// MERN = MONGO + EXPRESS + REACT + NODE

// Development = Node.js server + React server

// MEN

// E = Express

const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose'); // MongoDB
const User = require('./models/user.model');

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/project4');

app.post('/api/register', async (req, res) => {
    console.log(req.body)
    try {
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        });
        res.json({ status: 'ok' });
    } catch (err) {
        res.json({ status: 'eror', error: 'Duplicate email' });
    }

})

app.post('/api/login', async (req, res) => {
        const user = await User.findone({ 
            email: req.body.email, 
            password: req.body.password 
        })

        if (user) {
            return res.json({ status: 'ok', user: true });
        } else {
            return res.json({ status: 'error', user: false });
        }
})

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})
