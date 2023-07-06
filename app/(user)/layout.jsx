import "../globals.css";
import { Raleway } from "next/font/google";
import Header from "../../components/nav/Header";
import Footer from "../../components/Footer";
import { Analytics } from "@vercel/analytics/react";

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
    <html lang="en" className={`${raleway.variable} font-sans`}>
      <body className="bg-neutral-50 text-neutral-800 dark:bg-darkPurple dark:text-neutral-300 overflow-x-hidden">
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
