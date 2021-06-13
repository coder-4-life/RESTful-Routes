const express = require('express');
const app = express();
const path = require('path');

// parsing body with urlencoded method && json file as well
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// setting up the views directory and joining to combine the route for file access.
app.set('/views', path.join(__dirname , 'views'));
app.set('view engine', 'ejs')

const comments = [
    {
        username: 'Nabeel',
        comment: 'Heheheehehhehe , here is my comment !'
    },
    {
        username: 'Asif',
        comment: 'Heheheehehhehe , here is my comment !'
    },
    {
        username: 'Adeel',
        comment: 'Heheheehehhehe , here is my comment !'
    },
    {
        username: 'Hadi',
        comment: 'Heheheehehhehe , here is my comment !'
    }
];

// we are rendering comments from above comments array to a ejs file => index.ejs when we receive a get request for '/comments' 

app.get('/comments', (req,res) => {
    res.render('comments/index', {comments});
})

app.get("*", (req,res) => {
    res.send('sorry nothing found :)')
})

app.listen(3000, () => {
    console.log('listening at port 3000');
})