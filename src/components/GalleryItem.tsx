import type { galleryItem } from '@/types'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"



export const GalleryItem: React.FC<galleryItem> = ({ thumbnail, caption, theImage, title, size }) => {
    const imgSize = `max-w-[90vh]`
    return (
        <Dialog>
            <DialogTrigger className='thumbnail'>
                {thumbnail}
            </DialogTrigger>
            <DialogContent className={imgSize}>
                {theImage}
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        {caption}
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}