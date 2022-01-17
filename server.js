const express = require('express');
const app= express();
const path = require('path');
const router= express.Router();
const port = process.env.PORT || 3000;

app.use('/', express.static(path.join(__dirname, '/Develop/public')));



router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public', 'index.html'));
});

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public', 'notes.html'));
});

app.use('/', router);
app.use('/notes', router);

app.listen(port);



