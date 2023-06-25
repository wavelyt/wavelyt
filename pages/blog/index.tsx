import type {GetStaticProps, NextPage} from "next";
import {getAllMdx} from "@/lib/mdx";
import {MDXFrontMatter} from "@/lib/types";
import {Page} from "@/components/Page";
import {PostList} from "@/components/PostList";
import {Meta} from "@/components/Meta";
import siteConfig from "@/data/siteConfig";
import {FixWidth} from "@/components/FixWidth";

interface PostsProps {
	posts: Array<MDXFrontMatter>;
}

const Blog: NextPage<PostsProps> = ({posts}) => {
	return (
		<Page
			metaTitle="Expert Blogs"
			metaDescription="Explore our blog for expert insights on Experience Design, DXP, Digital Engineering, and Quality Engineering, empowering you with knowledge for enhanced digital experiences."
		>
			{posts.length > 0 ? <PostList posts={posts}/> : <FixWidth>No Blog found</FixWidth>}
		</Page>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const mdxFiles = getAllMdx().map((post) => post["frontMatter"]);
	return {
		props: {
			posts: mdxFiles,
		},
	};
};

export default Blog;
