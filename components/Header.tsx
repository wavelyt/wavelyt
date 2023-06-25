import { useRouter } from "next/router";
import Image from "next/image";
import siteConfig from "@/data/siteConfig";
import Link from "next/link";
import { cx } from "@/lib/utils";

export const Header: React.FC = () => {
  const { pathname } = useRouter();

  const fontStyle = 'font-semibold text-3xl';


  return (
    <header className="bg-gray-100 py-8 flex justify-between items-center">
      <Link href="/" className="font-bold">
        {siteConfig.avatar ? (
          <span className={`text-gray-900 inline-flex items-center ${fontStyle}`}>
            <Image priority src={siteConfig.avatar} alt={siteConfig.siteName} width={200} height={55}/>
          </span>
        ) : (
          siteConfig.siteName
        )}
      </Link>

      <nav>
        <ul className="flex space-x-8">
          {siteConfig.nav.map((item, index) => {
            const isActive = item.href === pathname;
            return (
              <li key={index}>
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cx(
                    "text-gray-700 hover:text-gray-900",
                    "dark:text-gray-400 dark:hover:text-gray-300"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
