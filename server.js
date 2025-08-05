import express from 'express'
import path from 'path'
import posts from './routes/posts.js';
import logger from './middleware/logger.js';
import errorHandler from './middleware/error.js';
const app = express()

const port = process.env.PORT || 8000




app.use(express.json()) // raw data
app.use(express.urlencoded({extended:false})) // form data

//logger middleware

app.use(logger)

//Routes
app.use('/api/posts', posts)

//errorHandler middleware
app.use(errorHandler)
//set up static folder. we use, use() because its middleware

// app.use(express.static(path.join(__dirname, 'public')))

// app.get('/', (req,res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html')) // a way to serve http files instead of just json or etx 

// })

// app.get('/about' , (req,res) => {
//     res.sendFile(path.join(__dirname, 'public', 'about .html'))
// })

//instead of creating a separate route for everypage, create a static server

app.listen(port, () => console.log(`Server is running on port ${port}`))