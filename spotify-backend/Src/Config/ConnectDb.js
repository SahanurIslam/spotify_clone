const mongoose = require('mongoose');

// connect database
mongoose.connect('mongodb://localhost:27017/spotify', {
    // useUnifiedTopology: true,
    // useNewUrlParser: true
}).then(() => {
    console.log('Connection Successful.');

}).catch((err) => {
    console.log(err);

});

