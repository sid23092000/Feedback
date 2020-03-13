const mongoose = require('mongoose');

module.exports = mongoose.connect('mongodb+srv://sid23:sid23@acm-fklp9.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    if(!err) {
        console.log('Success in db connection');
    } 
});

require('./feedbackmodel');