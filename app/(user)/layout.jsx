import "../globals.css";
import { Raleway } from "next/font/google";
import Header from "../../components/nav/Header";
import Footer from "../../components/Footer";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Frontend Roadmap",
    template: "%s | Frontend Roadmap",
  },
  description: "A roadmap for frontend web development",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${raleway.variable} font-sans 2xl:text-lg`}>
      <body className="bg-neutral-100 text-neutral-700 dark:bg-darkPurple dark:text-neutral-300 overflow-x-hidden">
        <Script id="theme-switcher" strategy="beforeInteractive">
          {`
            if (localStorage.darkMode === 'true' || (localStorage.darkMode === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark')
            } else {
              document.documentElement.classList.remove('dark')
            }
          `}
        </Script>
        <div className="text-center  text-red-400 w-full">
          Website in development! Not an indicative of final product.
        </div>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
