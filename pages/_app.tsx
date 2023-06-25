import "@/styles/globals.css";
import { useEffect } from "react";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { useRouter } from 'next/router';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {Background} from "@/components/Background";
import {FixWidth} from "@/components/FixWidth";
import Script from "next/script";
import * as gtag from "../lib/gtag";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <ThemeProvider
      disableTransitionOnChange
      defaultTheme="Light"
      attribute="class"
    >
      {/* Google tag (gtag.js) */}
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}></Script>
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <a
        href="#main"
        className="fixed p-2 top-0 left-0 -translate-y-full focus:translate-y-0"
      >
        Skip to main content
      </a>
      <Background color="bg-gray-100">
        <FixWidth>
          <Header />
        </FixWidth>
      </Background>
      <main id="main">
        <Component {...pageProps} />
      </main>
      <Background color="bg-gray-100">
        <FixWidth>
          <Footer />
        </FixWidth>
      </Background>
    </ThemeProvider>
  );
}

export default MyApp;
