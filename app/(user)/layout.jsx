import "../globals.css";
import { Raleway } from "next/font/google";
import Header from "../../components/Header";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
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
      <body className="bg-purple font-sans text-zinc-900 dark:text-zinc-200">
        <Header />
        {children}
      </body>
    </html>
  );
}
