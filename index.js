const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courseCategories = require('./data/courseCategory.json');
const courses = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send('Tap skills api is running');
});

app.get('/courseCategories', (req, res) => {
    res.send(courseCategories)
});


app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courses.find(n => n.id == id);
    res.send(selectedCourse);
})



app.get('/courses', (req, res) => {
    res.send(courses);
})

app.listen(port, () => {
    console.log('Tap skills server running on port', port);
})
