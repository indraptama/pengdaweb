import type { ImageMetadata } from "astro"
import type { CollectionConfig } from "astro:content"

interface Link {
    title: string
    href: string
    desc?:string
}

export interface NavMenu {
    title: string
    href: string
    subMenu?: Link[]
}

export interface galleryItem {
    thumbnail: ReactNode
    theImage: ReactNode
    caption?: string
    title?: string
    size?: number
}

export interface Post {
    title: string,
    postDate: string | Date | number;
    author?: string,
    image?: ImageMetadata,
    draft?: boolean,
    summary?: string,
    tags?: string[],
    href: string;
}
