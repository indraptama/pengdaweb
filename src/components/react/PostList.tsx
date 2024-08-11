import type { Post } from "@/types";
import type { CollectionKey } from "astro:content";
import { useState, type ReactNode } from 'react';

interface Collection {
    id: string;
    slug: string;
    body: string;
    collection: string;
    data: Post;
    render?: string;
}

interface Props {
    postData: Collection[];
    theImage?: ReactNode[];
    image?: string;
    link: string
}

// Components
import { Button } from "@/components/ui/button"
import PostListItem from '@/components/react/PostListItem';


const PostList: React.FC<Props> = ({ postData, theImage, image, link }) => {
    const postsPerPage = 5;
    const [visiblePosts, setVisiblePosts] = useState(postsPerPage);
    const loadMorePosts = () => {
        setVisiblePosts(prevVisiblePosts => prevVisiblePosts + postsPerPage);
    };
    const allPostsLoaded = visiblePosts >= postData.length;
    const displayedPosts = postData.slice(0, visiblePosts);
    return (
        <>
            <ul>
                {
                    displayedPosts.map((post, idx) => (
                        <li className="py-8 last:mb-0 border-b last:border-none">
                            <PostListItem
                                title={post.data.title}
                                postDate={post.data.postDate}
                                summary={post.data.summary}
                                href={`${link}/${post.slug}`}
                                image={post.data.image}
                            />
                        </li>
                    ))
                }
            </ul>
            <div className="text-center mt-8 mb-16">
                {
                    !allPostsLoaded && (
                        <Button variant={'outline'} className="w-96 max-w-full" onClick={loadMorePosts}>Selanjutnya</Button>
                    )
                }
            </div>
        </>
    )
}


export default PostList;

