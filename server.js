const express =  require('express')
const path = require('path')
const app = express()

let posts = [ 
    { id: 1, title: 'Post one'},
     { id: 2, title: 'Post two'},
      { id: 3, title: 'Post three'}
]

app.get('/api/posts' , (req,res) =>{
    res.json(posts)
})


//set up static folder. we use, use() because its middleware

// app.use(express.static(path.join(__dirname, 'public')))

// app.get('/', (req,res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html')) // a way to serve http files instead of just json or etx 

// })

// app.get('/about' , (req,res) => {
//     res.sendFile(path.join(__dirname, 'public', 'about .html'))
// })

//instead of creating a separate route for everypage, create a static server

app.listen(5000, () => console.log('Server is running on port 5000'))