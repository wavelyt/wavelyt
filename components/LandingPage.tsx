import Head from "next/head";
import { onlyText } from "react-children-utilities";
import { formatDate } from "@/lib/formatDate";
import siteConfig from "@/data/siteConfig";
import { Prose } from "@/components/Prose";
import { cx } from "@/lib/utils";
import {Meta} from "@/components/Meta";

interface PageProps {
	title: string | React.ReactNode;
	meta?: React.ReactNode;
	children?: React.ReactNode;
}

export const LandingPage: React.FC<PageProps> = ({title, meta, children}) => {
	const metaTitle = onlyText(title);
	const customTitle = `${metaTitle} - ${siteConfig.siteName}`;
	return (
		<>
			{meta}
			<header
				className={cx(
					"mb-8 pb-8 border-b",
					"border-gray-200",
					"dark:border-gray-700"
				)}
			>
				<h1 className="font-bold text-3xl">{title}</h1>
				{meta}
			</header>
			{children}
		</>
	);
};
