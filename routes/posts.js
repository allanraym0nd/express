import express from 'express'
const router =  express.Router();


let posts = [ 
    { id: 1, title: 'Post one'},
     { id: 2, title: 'Post two'},
      { id: 3, title: 'Post three'}
]


const logger  = (req,res,next) => {
    console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl} `);
    next();

}

// get all posts
router.get('/' , (req,res) =>{
    const limit  = parseInt(req.query.limit)

    if(!isNaN(limit) && limit > 0) {
        return res.status(200).json(posts.slice(0, limit))
    } 
        res.status(200).json(posts)
})

// get a single post
router.get('/:id' , (req,res,next) =>{
    const id = parseInt(req.params.id)
    const post = posts.find((post) => post.id === id)

    if(!post){
       const error = new Error(`A post with the id of ${id} was not found`); 
       error.status = 404
       return next(error)
    } 
        res.status(200).json(post)
    


    // res.status().json(posts.filter((post) => post.id === id))
})

router.post('/', (req,res) => {
    // console.log(req.body) // to get the data from request

    const newPost = {
        id: posts.length + 1,
        title: req.body.title
    } 

    if(!newPost.title) {
        return  res.status(404).json({message:'Please include title'})
    }

    posts.push(newPost)
    res.status(201).json(posts)
})

router.put('/:id', (req,res) => {
     const id = parseInt(req.params.id)
     const post = posts.find((post) => post.id === id)

     if (!post) {

        return res.status(404).json({message:`A post with the id of ${id} was not found`})
     }

     post.title = req.body.title;

     res.status(200).json(posts)


})

router.delete('/:id', (req,res) => {
     const id = parseInt(req.params.id)
     const post = posts.find((post) => post.id === id)

     if (!post) {

        return res.status(404).json({message:`A post with the id of ${id} was not found`})
     }

     posts = posts.filter((post) => post.id !== id)

     res.status(200).json(posts)


})



export default router;



//commonjS

// module.exports = router
