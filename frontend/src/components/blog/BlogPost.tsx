interface BlogPostProps {
    post: any;
}

const BlogPost = ({ post }) => {
    return (
        <div className="bg-gray-800 max-w-96 p-4 rounded-lg hover:bg-gray-700 transition-colors">
            <a className="block w-full h-full" href={`/posts/${post.id}`}>
                <div className="relative w-full h-full flex flex-col gap-1">
                    <h3 className="text-xl font-medium mb-2">
                        {post.data.title}
                    </h3>
                    <p className="text-gray-300 mb-6">
                        {post.data.description}
                    </p>
                    <p className="absolute bottom-0 right-0 text-gray-300 text-end">
                        {post.data.pubDate.toLocaleDateString()}
                    </p>
                </div>
            </a>
        </div>
    );
};

export default BlogPost;
