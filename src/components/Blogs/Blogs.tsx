"use client";
import { BlogPost } from "./blogTypes";
import { BlogCard } from "./BlogCard";
import blog1 from "../../../public/blogs/blog1.jpg";
import blog2 from "../../../public/blogs/blog2.jpg";
import blog3 from "../../../public/blogs/blog3.jpg";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslations } from "next-intl";


export default function BlogSection() {
  const t = useTranslations("blogs");
  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: t("blog1.title"),
      description: t("blog1.description"),
      image: blog1,
      publishedAt: t("blog1.date"),
      author: t("blog1.author"),
    },
    {
      id: "2",
      title: t("blog2.title"),
      description: t("blog2.description"),
      image: blog2,
      publishedAt: t("blog2.date"),
      author: t("blog2.author"),
    },
    {
      id: "3",
      title: t("blog3.title"),
      description: t("blog3.date"),
      image: blog3,
      publishedAt: "Aug 15, 2025",
      author: t("blog3.author"),
    },
  ];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <section className="py-16 bg-gray-50" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView && { opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto px-4"
      >
        <h2 className="text-3xl font-extrabold text-gray-800 mb-20 border-l-4 border-blue-600 pl-4 uppercase">{t("title")}</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.div key={post.id} initial={{ opacity: 0, y: 30 }} animate={isInView && { opacity: 1, y: 0 }} transition={{ duration: 1, delay: index * 0.2 }}>
              <BlogCard  post={post} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
