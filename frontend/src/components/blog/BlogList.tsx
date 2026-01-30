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
    const postsPerPage = 10;
    const currentPage = useStore(blogPage);

    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;

    const filteredPosts = posts.filter(
        (post) =>
            post.data.title.toLowerCase().includes(searchVal.toLowerCase()) ||
            post.data.tags
                .map((tag) => tag.toLowerCase())
                .includes(searchVal.toLowerCase()),
    );

    const currentPosts = filteredPosts.slice(startIndex, endIndex);

    if (currentPosts.length === 0) {
        return (
            <div className="py-12 text-center text-neutral-500">
                No posts found
            </div>
        );
    }

    return (
        <div className="divide-y divide-neutral-800">
            {currentPosts.map((post) => (
                <BlogPost key={post.id} post={post} />
            ))}
        </div>
    );
};

export default BlogList;
