
import Post from '../model/post.js';


export const createPost = async (request, response) => {
    try {
        const post = await new Post(request.body);
        post.save();

        response.status(200).json('Post saved successfully');
    } catch (error) {
        response.status(500).json(error);
    }
}

export const updatePost = async (request, response) => {
    try {
        const post = await Post.findById(request.params.id);

        if (!post) {
            response.status(404).json({ msg: 'Post not found' })
        }
        
        await Post.findByIdAndUpdate( request.params.id, { $set: request.body })

        response.status(200).json('post updated successfully');
    } catch (error) {
        response.status(500).json(error);
    }
}
export const deletePost = async (request,response) => {
    const postId = request.params.id; // Get the post ID from request parameters
console.log("kqwbrwberoi")
    try {
        const result = await Post.deleteOne({ _id: postId });
    
      if (!result) {
        return response.status(404).json({ message: 'Post not found' });
      }
    
      response.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
      console.error('Error deleting post:', error);
      response.status(500).json({ message: 'Internal Server Error' });
    }
    
}

export const getPost = async (request, response) => {
    try {
        const post = await Post.findById(request.params.id);

        response.status(200).json(post);
    } catch (error) {
        response.status(500).json(error)
    }
}

export const getAllPosts = async (request, response) => {
    let username = request.query.username;
    let category = request.query.category;
    let posts;
    try {
        if(username) 
            posts = await Post.find({ username: username }).sort({ time: -1 }) ;
        else if (category) 
            posts = await Post.find({ categories: category });
        else 
            posts = await Post.find({}).sort({ _id: -1 }) ;
            
        response.status(200).json(posts);
    } catch (error) {
        response.status(500).json(error)
    }
}