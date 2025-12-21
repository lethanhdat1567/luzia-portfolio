import Image from "next/image";

function GalleryImage({
    span,
    src,
    alt,
    scaleClass,
    priority,
}: {
    span: string;
    src: any;
    alt: string;
    scaleClass: string;
    priority?: boolean;
}) {
    return (
        <div className={span}>
            <div
                className={`relative h-120 overflow-hidden rounded-3xl transition-transform duration-300 ${scaleClass}`}
            >
                <Image
                    src={src}
                    alt={alt}
                    fill
                    priority={priority}
                    className="object-cover"
                />
            </div>
        </div>
    );
}

export default GalleryImage;
