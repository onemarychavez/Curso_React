import express from 'express'
import {getAllBlogs,getBlog,createBlogs,updateBlog,deleteBlog} from '../controllers/BlogControlller.js'

const router = express.Router()

router.get('/',getAllBlogs)
router.get('/:id',getBlog)
router.post('/',createBlogs)
router.put('/:id',updateBlog)
router.delete('/:id',deleteBlog)

export default router