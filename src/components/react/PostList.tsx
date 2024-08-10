import type { Post } from "@/types";
import type { CollectionEntry } from "astro:content";

import { useState, type ReactNode } from 'react';
import dayjs from 'dayjs'
import localizedFormat from "dayjs/plugin/localizedFormat";
import "dayjs/locale/id";

interface Collection {
    id: string;
    slug: string;
    body: string;
    collection: string;
    data: Post;
    render: string;
}

interface Props {
    postData: Collection[];
    theImage?: ReactNode
}

import PostListItem from '@/components/react/PostListItem';

// Setup
dayjs.extend(localizedFormat);
dayjs.locale("id");



const PostList: React.FC<Props> = ({ postData, theImage }) => {
    return (
        <>
            {
                postData.map((post, idx) => (
                    <PostListItem
                        title={post.data.title}
                        postDate={post.data.postDate}
                        summary={post.data.summary}
                        href={post.slug}
                        theImage={theImage}
                    >
                    </PostListItem>
                ))
            }
        </>
    )
}


export default PostList;

