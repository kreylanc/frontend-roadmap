import "../globals.css";
import { Raleway } from "next/font/google";
import Header from "../../components/Header";
import { Analytics } from "@vercel/analytics/react";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
    icon: "../../public/vercel.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={raleway.variable}>
      <body className="bg-darkPurple font-sans text-neutral-300">
        <div className="text-center bg-red-700 text-neutral-50">
          Website in development
        </div>
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
