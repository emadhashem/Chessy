import express , {Errback, Express, Request, Response} from 'express'
import dotenv from 'dotenv'
import gameRoute from './controllers/game.controller'
import path from 'path';

/* app config */
dotenv.config()
const app : Express = express();
const PORT = process.env.PORT;
app.set('views', path.join(__dirname, '../src/views'));
app.set('view engine', 'hbs');


/* routs */
app.get('/' , (req, res) => {
    res.render('index')
})

app.listen(PORT , () => {
    console.log('app is working on port : ' , PORT)
})
