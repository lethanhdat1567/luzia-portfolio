"use client";

import CommentItem from "@/app/(default)/about/components/Comment/CommentItem";
import { MOCK_COMMENTS } from "@/app/(default)/about/components/Comment/data";
import { images } from "@/assets/images";
import ScrollAnimate from "@/components/ScrollAnimate/ScrollAnimate";
import { getSheetContent } from "@/lib/getSheetContent";
import { convertDriveLinkToDirect } from "@/lib/upload";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function AboutComment() {
    const [comments, setComments] = useState([]);
    const [infoThumbnail, setInfoThumbnail] = useState("");
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer || isHovered) return;

        const scrollSpeed = 1.1;
        let animationId: number;

        const scroll = () => {
            if (scrollContainer.scrollTop >= scrollContainer.scrollHeight / 2) {
                scrollContainer.scrollTop = 0;
            } else {
                scrollContainer.scrollTop += scrollSpeed;
            }
            animationId = requestAnimationFrame(scroll);
        };

        animationId = requestAnimationFrame(scroll);

        return () => {
            if (animationId) cancelAnimationFrame(animationId);
        };
    }, [isHovered]);

    useEffect(() => {
        const http = async () => {
            const content = await getSheetContent("About");

            setComments(JSON.parse(content.comment_list));
            setInfoThumbnail(content.info_thumbnail);
        };

        http();
    }, []);

    return (
        <div className="app-container">
            <ScrollAnimate direction="up">
                <div className="grid grid-cols-12 gap-4 overflow-hidden lg:max-h-127.5">
                    {/* Image Section - Lên trước trên mobile */}
                    <div className="order-1 col-span-12 h-96 w-full overflow-hidden rounded-3xl bg-neutral-500 lg:order-2 lg:col-span-7 lg:h-127.5 lg:rounded-[50px]">
                        {infoThumbnail &&
                            convertDriveLinkToDirect(infoThumbnail) && (
                                <Image
                                    className="h-full w-full object-cover object-top"
                                    src={
                                        convertDriveLinkToDirect(
                                            infoThumbnail,
                                        ) || ""
                                    }
                                    alt="Thanh Dat"
                                    width={500}
                                    height={700}
                                />
                            )}
                    </div>

                    {/* Comment Section - Xuống sau trên mobile */}
                    <div
                        className="relative order-2 col-span-12 lg:order-1 lg:col-span-5"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <div
                            ref={scrollRef}
                            className="pointer-events-none h-96 w-full overflow-hidden rounded-3xl bg-neutral-100 p-4 [-ms-overflow-style:none] [scrollbar-width:none] sm:p-6 lg:h-127.5 lg:rounded-[40px] [&::-webkit-scrollbar]:hidden"
                        >
                            <div className="space-y-3 sm:space-y-4">
                                {/* Render lần 1 */}
                                {comments.map((comment: any) => (
                                    <CommentItem
                                        key={`first-${comment.id}`}
                                        avatar={comment.avatar}
                                        name={comment.name}
                                        title={comment.title}
                                        comment={comment.comment}
                                    />
                                ))}
                                {/* Render lần 2 để loop */}
                                {comments.map((comment: any) => (
                                    <CommentItem
                                        key={`second-${comment.id}`}
                                        avatar={comment.avatar}
                                        name={comment.name}
                                        title={comment.title}
                                        comment={comment.comment}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Bottom blur */}
                        <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-20 rounded-b-3xl bg-gradient-to-t from-neutral-100 to-transparent sm:h-24 lg:rounded-b-[40px]" />
                    </div>
                </div>
            </ScrollAnimate>
        </div>
    );
}

export default AboutComment;
