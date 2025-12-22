import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface CommentItemProps {
    avatar: string;
    name: string;
    title: string;
    comment: string;
}

function CommentItem({ avatar, name, title, comment }: CommentItemProps) {
    return (
        <div className="rounded-4xl bg-white p-4">
            <div className="mb-4 flex items-center gap-4">
                <Avatar className="h-8 w-8 rounded-md">
                    <AvatarImage src={avatar} />
                    <AvatarFallback>{name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col items-start">
                    <h2 className="text-md font-medium">{name}</h2>
                    <h3 className="text-sm text-gray-500">{title}</h3>
                </div>
            </div>
            <p className="text-[15px] text-neutral-800">{comment}</p>
        </div>
    );
}

export default CommentItem;
