import "../globals.css";
import { Raleway } from "next/font/google";
import Header from "../../components/nav/Header";
import Footer from "../../components/Footer";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import ConsentBanner from "@/components/cookie-consent/ConsentBanner";

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
    "A roadmap for beginner front-end web developers. Learn about the fundamentals along with different types of UI libraries and JavaScript frameworks.",
  keywords: [
    "Front-end",
    "HTML",
    "CSS",
    "React",
    "JavaScript",
    "Frameworks",
    "Next.js",
  ],
  icons: {
    icon: "/logo.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Frontend Roadmap",
    description:
      "A roadmap for beginner front-end web developers to help them choose the right technologies.",
    url: "https://www.frontendroadmap.com",
    siteName: "Frontend Roadmap",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frontend Roadmap",
    description:
      "A roadmap for beginner front-end web developers to help them choose the right technologies.",
    site: "@RoadmapFrontend",
    creator: "@RoadmapFrontend",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${raleway.variable} font-sans 2xl:text-lg`}>
      <body className="relative bg-neutral-100 text-neutral-700 dark:bg-darkPurple dark:text-neutral-300 overflow-x-hidden">
        <Script id="theme-switcher" strategy="beforeInteractive">
          {`
            if (localStorage.darkMode === 'true' || (localStorage.darkMode === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark')
            } else {
              document.documentElement.classList.remove('dark')
            }
          `}
        </Script>
        <ConsentBanner />
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
