const express = require('express');
const { fsyncSync } = require('fs');
const app= express();
const path = require('path');
const PORT = process.env.PORT || 3000;

const dataBase= require('./Develop/db/db.json');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Middleware to render static files
app.use('/', express.static(path.join(__dirname, '/Develop/public')));

//Display index.html files
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public', 'index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public', 'notes.html'));
});

function createNewNote(body, notesArray){
    const newNotes= body;
    if(!Array.isArray(notesArray))
    notesArray= [];

    if(notesArray.length === 0)
    notesArray.push(0);

    body.id = notesArray[0];
    notesArray[0]++;

    notesArray.push(newNote);
    fsyncSync.writeFileSync(path.join(__dirname, './develop/db/db.json'), 
    json.stringify(notesArray, null, 2)
    );
    return newNotes;
};


app.post('api/notes', (req, res) => {
    const newPost= createNewNote(req.body, allNotes);
    res.json(newPost);
});

function deleteNote(id, notesArray){
for (let i =0; i<notesArray.length; i++){
    let note = notesArray[i];

    if(note.id==id){
        notesArray.splice(i,1);
        fs.writeFileSync(path.join(__dirname, './db/db.json'),
        json.stringify(notesArray, null, 2)
        );
    }
}
};





app.listen(PORT, console.log('Listening on PORT 3000'));



