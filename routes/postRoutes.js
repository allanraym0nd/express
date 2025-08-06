import express from 'express'
import {getPosts,getPost,createPost,updatePost,deletePost} from '../controllers/postControllers.js'
const router =  express.Router();


const logger  = (req,res,next) => {
    console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl} `);
    next();

}

// get all posts
router.get('/',getPosts)

// get a single post
router.get('/:id',getPost)

router.post('/',createPost)

router.put('/:id',updatePost)

router.delete('/:id',deletePost)



export default router;



//commonjS

// module.exports = router
