import express from 'express'
import { getBlogAll, getBlog, createBlog, updateBlog, deletBlog } from '../controllers/user.controllers.js';

const router = express.Router();

// get all the data
router.post('/create', createBlog)
router.get('/blogs', getBlogAll);
router.get('/blog/:id', getBlog);
router.put('/update/:id', updateBlog);
router.delete('/delete/:id', deletBlog)

export default router