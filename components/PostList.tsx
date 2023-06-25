import Link from "next/link";
import { formatDate } from "@/lib/formatDate";
import type { MDXFrontMatter } from "@/lib/types";
import { cx, slugify } from "@/lib/utils";
import { Tag } from "./Tag";
import Image from "next/image";

interface PostListProps {
  posts: Array<MDXFrontMatter>;
}

export const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div className="container px-8 mx-auto xl:px-5 max-w-screen-lg py-5 lg:py-8">
      <div className="grid gap-10 md:grid-cols-2 lg:gap-10">
      {posts.map((post, index) => {
        return (
          <div className="group cursor-pointer" key={index}>
            <div className="overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105">
              <a className="relative block aspect-video" href={`/blog/${post.slug}`}>
                <Image src={post.img ? post.img : ''} alt={post.title} width={300} height={300}/>
              </a>
            </div>

            <div className="mt-3 flex items-center space-x-3 text-gray-500">
              <time
                className={cx(
                  "block mb-2",
                  "text-gray-500",
                  "dark:text-gray-400"
                )}
              >
                {formatDate(post.date)}
              </time>
            </div>
            <div>
              <h2 className="font-bold text-xl">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              {post.tags ? (
                <div className="mt-4 flex flex-wrap space-x-2">
                  {post.tags.map((tag, index) => {
                    return (
                      <div className="flex gap-3" key={index}>
                        <Tag href={`/blog/tagged/${slugify(tag)}`}>{tag}</Tag>
                      </div>
                    );
                  })}
                </div>
              ) : null}
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
};
