const express = require('express');
const app= express();
const path = require('path');
const router= express.Router();
const port = process.env.PORT || 3000;

app.use('/', express.static(path.join(__dirname, '/Develop/public')));



router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public', 'index.html'));
});


app.use('/', router);

app.listen(port);



