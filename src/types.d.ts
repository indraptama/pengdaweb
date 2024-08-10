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