import Link from "next/link";
import { Post } from "@/types";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post: { id, title, mainPictureUrl } }: PostCardProps) {
  return (
    <Link href={`/articles/${id}`} className="w-[400px] cursor-pointer">
      <div className="relative shadow-md rounded-lg bg-gray-700 border border-gray-500 mr-3 mb-3 text-white">
        {/** biome-ignore lint/performance/noImgElement: images come form unknown domains */}
        <img className="h-[200px] w-full object-cover rounded-md" src={mainPictureUrl} alt={title} />
        <div className="flex justify-center">
          <div className="text-center p-3">{title}</div>
        </div>
      </div>
    </Link>
  );
}
