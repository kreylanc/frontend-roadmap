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
  metadataBase: new URL("https://www.frontendroadmap.com/"),
  title: {
    default: "Frontend Roadmap",
    template: "%s | Frontend Roadmap",
  },
  description:
    "A roadmap for beginner front-end web developers to help them choose the right technologies.",
  icons: {
    icon: "/logo.png",
  },
  alternates: {
    canonical: "https://www.frontendroadmap.com",
  },
  openGraph: {
    title: "Frontend Roadmap",
    description:
      "A roadmap for beginner front-end web developers to help them choose the right technologies.",
    url: "https://frontendroadmap.com",
    siteName: "Frontend Roadmap",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frontend Roadmap",
    description:
      "A roadmap for beginner front-end web developers to help them choose the right technologies.",
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
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
