import "../globals.css";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Frontend Roadmap Studio",
  description: "Sanity Studio for major project; frontend roadmap",
  icons: {
    icon: "https://www.sanity.io/static/images/favicons/favicon-32x32.png",
  },
  robots: {
    index: false,
    nocache: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
