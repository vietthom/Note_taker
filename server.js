const express = require('express');
const app= express();
const path = require('path');
const router= express.Router();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Middleware to render static files
app.use('/', express.static(path.join(__dirname, '/Develop/public')));

//Routes to specific pages
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public', 'index.html'));
});

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public', 'notes.html'));
});

//This should get me the 'getNotes' GET request
router.get('/api/notes', (req, res) => res.json('getNotes'));

app.use('/', router);
app.use('/notes', router);

app.listen(port);



