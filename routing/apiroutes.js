const fs = require('fs');
let setNotes = require('../db/db.json');
const router = require('express').Router();

router.get('/notes', (req, res) => {
    setNotes = JSON.parse(fs.readFileSync('./db/db.json'))
    res.json(setNotes);
});


router.post('/notes', (req, res) => {
    let noteModel = {
        title:req.body.title,
        text:req.body.text,
        id:Math.floor(Math.random()*100)
    }
    setNotes.push(noteModel);
    fs.writeFileSync('./db/db.json', JSON.stringify(setNotes))
    res.json(setNotes)
});

module.exports = router;