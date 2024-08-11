import type { Post } from "@/types";
import type { ReactNode } from "react";

interface Props extends Post {
    theImage?: ReactNode
}

import dayjs from 'dayjs'
import localizedFormat from "dayjs/plugin/localizedFormat";
import "dayjs/locale/id";


// Setup
dayjs.extend(localizedFormat);
dayjs.locale("id");



const PostListItem: React.FC<Props> = ({ title, image, href, summary, author, postDate, theImage }) => {
    return (
        <div className="lg:flex flex-row-reverse justify-between gap-8">
            {
                image ? (
                    <div className="mb-4 lg:mb-0 lg:w-1/3">
                        <div>
                            <img src={image.src} alt={title} className="w-full aspect-[16/10] object-cover rounded" width={480}/>
                        </div>
                    </div>
                ) : ''
            }

            <div className={`${image ? "lg:w-2/3" : "w-full"}`}>
                <p className="mb-1 text-muted-foreground uppercase font-semibold text-xs">{dayjs(postDate).format("DD MMMM YYYY")}</p>
                <h2 className="lg:mb-4 font-serif text-xl lg:text-2xl">
                    <a className="animate-in duration-150 hover:underline" href={href}>
                        {title}
                    </a>
                </h2>
                <div className="hidden lg:block">
                    <p className="line-clamp-3">{summary}</p>
                </div>
            </div>
        </div>
    )
}



export default PostListItem