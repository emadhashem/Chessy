import express , {Errback, Express, Request, Response} from 'express'
import dotenv from 'dotenv'
import gameRoute from './controllers/game.controller'

/* app config */
dotenv.config()
const app : Express = express();
const PORT = process.env.PORT;
app.set('view engine', 'ejs');
// app.set('views', __dirname + '/src/views');
/* app config */

/* routs */
app.use('/home' , gameRoute)

app.listen(PORT , () => {
    console.log('app is working on port : ' , PORT)
})
