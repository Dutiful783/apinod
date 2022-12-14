const express = require('express');
const app = express();
const morgan = require('morgan')
const mongoose = require('mongoose')
const blogRoutes = require('./routes/BlogRoutes') 

app.set('view engine', 'ejs');

//Connect to mangoose
const dbURL = 'mongodb+srv://tutorial:12345@nodetuts.toh8aaj.mongodb.net/test'
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
.then((result) => app.listen(3000))
.catch((err) => console.log(err))


// Middleware and static files
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));


app.get('/', (req, res) => {
    res.redirect('/blogs')
});

app.get('/about', (req, res) => {
    res.render('about', {title: 'About'})

});

app.use('/blogs', blogRoutes)

app.use((req,res) => {
    res.status(404).render('404', {title: '404'})

})


// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title: 'new blog 2',
//         snippet: 'about my new blog',
//         body: 'more about my new blog'
//     });

//     blog.save()
//     .then((result) => {
//         res.send(result)
//     })
//     .catch((err) => {
//         console.log(err)
//     });
// })

// app.get('/all-blogs', (req,res) => {
//     Blog.find()
//     .then((result) => {
//         res.send(result);
//     })
//     .catch((err) => {
//         console.log(err)
//     })
// })

// app.get('/single-blog', (req, res) => {
//     Blog.findById('634ffc14ac3ba980025b07d5')
//     .then((result) => {
//         res.send(result)
//     })
//     .catch((err) => {
//         console.log(err)
//     })
// })
