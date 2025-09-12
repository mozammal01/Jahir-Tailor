import { StaticImageData } from "next/image";

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  image: StaticImageData;
  publishedAt: string;
  author: string;
}
