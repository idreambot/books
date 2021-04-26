const express= require('express');
const mongoose = require('mongoose');

const app = express();

// const ejs = require('ejs');
// app.set('view engine', 'ejs');

var exphbs  = require('express-handlebars');
app.engine('hbs',exphbs());
app.set('view engine', 'hbs');

mongoose.connect('mongodb+srv://idreambot:GTS561OK@cluster0.ebir6.mongodb.net/cts?retryWrites=true&w=majority');

const booksSchema = {
    title: String,
    price: String,
    categories: String,
    authors: String,
    status: String,
    isbn : String
}

const Book = mongoose.model('Book', booksSchema);


app.get('/', (req,res)=>{
    Book.find({}, function(err, books){
        res.render('books', {
            layout:false,
            booksList : books,
            i:0
        })
    }).lean()
})

app.get('/a', (req,res)=>{
    Book.find({}, function(err, books){
        res.render('dataTables', {
            layout:false,
            booksList : books,
            i:0
        })
    }).lean()
})

app.listen(4000, function(){
    console.log('server is running');
})