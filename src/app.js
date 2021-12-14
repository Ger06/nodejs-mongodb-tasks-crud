import express from "express";
import index from './routes/index'
import exphbs from 'express-handlebars'
import path from 'path'
import morgan from 'morgan'


const app = express();


app.set('views', path.join(__dirname, 'views'));

app.engine('.hbs',exphbs({
    layoutsDir: path.join(app.get('views'), 'layouts'),
    defaultLayout: 'main',
    extname: ".hbs"
}))

app.set('view engine', ".hbs")

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}))

//Routes
app.use(index);

//Statics
app.use(express.static(path.join(__dirname,"public")));

export default app;