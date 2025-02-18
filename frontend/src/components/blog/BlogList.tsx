import BlogPost from "@/components/blog/BlogPost.tsx";
import { useStore } from "@nanostores/react";
import { blogPage, searchValue } from "@/stores/store";
import type { InferEntrySchema, RenderedContent } from "astro:content";

interface BlogListProps {
    posts: {
        id: string;
        body?: string;
        collection: "blog";
        data: InferEntrySchema<"blog">;
        rendered?: RenderedContent;
        filePath?: string;
    }[];
}

const BlogList = ({ posts }: BlogListProps) => {
    const searchVal = useStore(searchValue);
    // Pagination settings
    const postsPerPage = 9;
    const currentPage = useStore(blogPage);

    // Get posts for current page
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;

    // Filter posts based on search value and tags
    const filteredPosts = posts.filter(
        (post) =>
            post.data.title.toLowerCase().includes(searchVal.toLowerCase()) ||
            post.data.tags
                .map((tag) => tag.toLowerCase())
                .includes(searchVal.toLowerCase())
    );

    const currentPosts = filteredPosts.slice(startIndex, endIndex);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {currentPosts.map((post) => (
                <BlogPost key={post.id} post={post} />
            ))}
        </div>
    );
};

export default BlogList;
