import { BlogPost } from "./blogTypes";
import { BlogCard } from "./BlogCard";
import blog1 from '../../../public/blogs/blog1.jpg'
import blog2 from '../../../public/blogs/blog2.jpg'
import blog3 from '../../../public/blogs/blog3.jpg'

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "5 Tips to Choose the Perfect Suit",
    description: "Learn how to select a tailored suit that fits your body and style.",
    image: blog1,
    publishedAt: "Sep 10, 2025",
    author: "John Tailor",
  },
  {
    id: "2",
    title: "The Art of Hand-Stitched Detailing",
    description: "Discover why hand-stitching makes all the difference in premium tailoring.",
    image: blog2,
    publishedAt: "Aug 28, 2025",
    author: "Jane Needle",
  },
  {
    id: "3",
    title: "Tailoring Trends 2025: What’s In",
    description: "Explore the latest trends in men's and women's tailoring this year.",
    image: blog3,
    publishedAt: "Aug 15, 2025",
    author: "Alex Thread",
  },
];

export const BlogSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-20 border-l-4 border-blue-600 pl-4 uppercase">Blogs</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};
