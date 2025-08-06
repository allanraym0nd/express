import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import posts from './routes/postRoutes.js';
import logger from './middleware/logger.js';
import errorHandler from './middleware/error.js';
import notFound from './middleware/notFound.js';
const app = express()

const port = process.env.PORT || 8000

//get the directory name
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Body parser middleware
app.use(express.json()) // raw data
app.use(express.urlencoded({extended:false})) // form data

//logger middleware
app.use(logger)

app.use(express.static(path.join(__dirname, 'public'))) // __dirname is in the scope of commonJs

//Routes
app.use('/api/posts', posts)

// catch all
app.use(notFound);

//errorHandler middleware
app.use(errorHandler)
//set up static folder. we use, use() because its middleware

// app.get('/', (req,res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html')) // a way to serve http files instead of just json or etx 

// })

// app.get('/about' , (req,res) => {
//     res.sendFile(path.join(__dirname, 'public', 'about .html'))
// })

//instead of creating a separate route for everypage, create a static server

app.listen(port, () => console.log(`Server is running on port ${port}`))