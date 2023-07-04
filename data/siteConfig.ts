import type { SiteConfig } from "@/lib/types";
const siteConfig: SiteConfig = {
  avatar: "/wavelyt-logo.svg",
  siteUrl: "https://nextjs-mdx-blog-theme.vercel.app",
  siteName: "Wavelyt",
  siteDescription: "Unlock Your Business's Full Potential with Cutting-Edge Tech Solutions",
  siteThumbnail: "/wavelyt-logo.svg",
  contact: 'mail@wavelyt.com',
  nav: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
  ],
  social: {
    // github: "https://github.com/wavelyt",
    twitter: "https://twitter.com/wavelyt",
    linkedin: "https://www.linkedin.com/company/wavelyt/",
  },
};
export default siteConfig;
