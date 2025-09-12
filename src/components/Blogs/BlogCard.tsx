import { BlogPost } from "@/components/Blogs/blogTypes";
import { CalendarDays, User } from "lucide-react";
import Image from "next/image";

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105">
      <Image
        src={post.image}
        alt={post.title}
        width={400}
        height={250}
        className="w-full h-56 object-cover"
      />
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{post.description}</p>
        <div className="flex items-center justify-between text-gray-400 text-sm">
          <div className="flex items-center gap-1">
            <CalendarDays className="w-4 h-4" />
            <span>{post.publishedAt}</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>{post.author}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
