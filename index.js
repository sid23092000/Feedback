const express = require('express');
const mongoose = require('mongoose');
const db = require('./models/db');
const app = express();
const path = require('path');
const router = express.Router();
const bodyParser = require('body-parser');
const model = require('./models/feedbackmodel');
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());

app.use(async (err, req, res, next) => {
        res.status(422).send({error: err.message});
})
app.get('/', async (req, res, next) => {
    res.send('You are on home page');
})
app.get('/feedback',async (req, res, next) => {
    res.send('Fill in the Feedback Form details');
});


app.post('/aboutus', async (req, res, next) => {
    console.log(req.body)
    
    model.create(req.body).then((feedback) => {
        res.send(feedback);
    }).catch((err) => {
        const { name, email, subject, message } = req.body;
        if(!name || !email || !subject || !message) {
            res.send('All the fields are compulsory to fill in!')
        }
        else
        res.send('Error');
    })
    
});

app.delete('/feedback/:id', async (req, res, next) => {
    model.findByIdAndRemove({_id: req.params.id}).then((err, feedback) => {
            res.send(feedback);
    }).catch((err)=> {
        res.send('Error');
    })
})

app.listen(PORT, () => {
    console.log(`Server Started on PORT ${PORT}`)
});