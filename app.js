const express = require("express");
const app = express();
const path = require('path');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Подключаем статику
app.use(express.static(path.join(__dirname, 'public')));

// Подключаем views(hbs)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Отображаем главную страницу с использованием шаблона "index.hbs"
app.get('/', function (req, res) {
    res.render('index', req.query);
});

app.post('/get_location', function (req, res) {
    console.log("Hello")

    console.log("получение геопозиции: ", req.body)
    res.end()
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Listening on " + port));