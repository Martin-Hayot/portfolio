interface BlogPostProps {
    post: any;
}

const BlogPost = ({ post }: BlogPostProps) => {
    const formatDate = (date: Date) => {
        return new Intl.DateTimeFormat("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        }).format(date);
    };

    return (
        <a
            href={`/posts/${post.id}`}
            className="group block py-6 border-b border-neutral-800 last:border-b-0 transition-colors hover:bg-neutral-900/50 -mx-4 px-4 rounded-lg"
        >
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 text-sm text-neutral-500">
                    <time dateTime={post.data.pubDate.toISOString()}>
                        {formatDate(post.data.pubDate)}
                    </time>
                    {post.data.readingTime && (
                        <>
                            <span className="text-neutral-700">·</span>
                            <span>{post.data.readingTime}</span>
                        </>
                    )}
                </div>
                <h3 className="text-lg font-medium text-neutral-100 group-hover:text-white transition-colors">
                    {post.data.title}
                </h3>
                <p className="text-neutral-400 text-sm line-clamp-2">
                    {post.data.description}
                </p>
            </div>
        </a>
    );
};

export default BlogPost;
