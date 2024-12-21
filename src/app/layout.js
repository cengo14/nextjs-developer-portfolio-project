'use client';

import { ThemeProvider } from "next-theme";
import Header from "./component/Header";
import NextNProgress from 'nextjs-progressbar';
import { orange } from "tailwindcss/colors";
import "./globals.css";
import { useEffect, useState } from "react";

const Layout = ({ title, description, children }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // İlk olarak sadece isClient true olduğunda render edelim
  if (!isClient) return null;

  return (
    <>
      <NextNProgress
        color={orange[500]}
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <ThemeProvider attribute="class">
        {/* Html ve body etiketlerini burada tanımlıyoruz */}
        <html lang="tr">
          <head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:site_name" content="Portfolio" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
          </head>
          <body className="relative overflow-auto z-1 px-3 min-h-screen bg-primary-light dark:bg-primary-dark antialiased font-montserrat">
            <Header />
            <main>{children}</main>
            <div className="absolute bottom-36 right-5 max-md:hidden">
              <img
                src="/buymecoffie.png"
                class="size-20"
                alt=""
              />
            </div>
          </body>
        </html>
      </ThemeProvider>
    </>
  );
};

export default Layout;
