const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello my cron job')
});

app.listen(3001, () => {
    console.log('Server Running on port 3001');
})