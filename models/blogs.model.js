import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: String,
    category: String,
    tags: Array,
    created_at: {
        type: Date,
        default: Date.now,
    },
}, {timestamps: true});

const Blog = mongoose.model('Blog', blogSchema);

export default Blog;