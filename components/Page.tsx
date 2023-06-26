import { onlyText } from "react-children-utilities";
import siteConfig from "@/data/siteConfig";
import { cx } from "@/lib/utils";
import {Meta} from "@/components/Meta";

interface PageProps {
  title?: string | React.ReactNode;
  metaTitle?: string;
  metaDescription?: string;
  meta?: React.ReactNode;
  children?: React.ReactNode;
}

export const Page: React.FC<PageProps> = ({title, metaTitle, metaDescription, children}) => {
  const pageTitle = onlyText(title);
  return (
    <div className="antialiased text-gray-800">
      <Meta
        title={metaTitle ? `${metaTitle} - ${siteConfig.siteName}` : siteConfig.siteName}
        description={metaDescription ?? siteConfig.siteDescription}
      />
      {title ? (
        <header
          className={cx(
            "mb-8 pb-8 border-b",
            "border-gray-200",
            "dark:border-gray-700"
          )}
        >
          <h1 className="font-bold text-3xl text-center">{pageTitle}</h1>
        </header>
      ): null}
      {children}
    </div>
  );
};
