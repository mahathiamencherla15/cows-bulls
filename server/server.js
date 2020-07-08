const express = require('express');
const path = require('path');
const SpellChecker = require('simple-spellchecker');
const port = process.env.PORT || 3000;

const app = express();

const publicPath = path.join(__dirname,'..','public');

app.use(express.static(publicPath));

app.get('/validate/:word', (req, res) => {
    SpellChecker.getDictionary("en-US", function(err, dictionary) {
        if(!err) {
            res.send(dictionary.spellCheck(req.params.word))            
        }        
    })
})

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'))
});



app.listen(port, () => {
    console.log('server is up on', port)
})
