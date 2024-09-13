import Blog from "../models/blogs.model.js"


export const createBlog = async (req, res) => {
    try {
        const data = await Blog.create(req.body);
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: err.message });
    }
}

export const getBlogAll = async (req, res) => {
    try {
        const { title, author, category } = req.query;
        const queryObject = {};
        if (title) {
            queryObject.title = {$regex: title, $options: 'i'};
            console.log(queryObject.title);
        }
        if (author) {
            // queryObject.author = {$regex: author, $options: 'i'};
            queryObject.author = author;
            
            console.log(queryObject.title);
        }
        if (category) {
            queryObject.category = category;
            console.log(queryObject.category);
        }
        const data = await Blog.find(queryObject);
        return res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: err.message });
    }
};

export const getBlog = async (req, res) => {
    try {
        const data = await Blog.findById(req.params.id);
        if (!data) {
            return res.status(404).json("User not found");
        }
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: err.message });
    }
};


export const updateBlog = async (req, res) => {
    const user = await Blog.findById(req.params.id);
    try {
        if (!user) {
            return res.status(404).json("User not found");
        }
        const data = await Blog.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: err.message });
    }
}

export const deletBlog = async (req, res) => {
    try {
        const data = await Blog.findByIdAndDelete(req.params.id)
        if (!data) {
            return res.status(404).json("User not found");
        }
        res.json({ messaga: "Blog deleted successfully", deletedBlog: data })
    } catch (error) {
        res.status(500).json({ message: err.message });
    }
}