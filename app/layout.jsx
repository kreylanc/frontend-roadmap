import "./globals.css";
import { Raleway } from "next/font/google";
import Link from "next/link";

const raleway = Raleway({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Frontend Roadmap",
  description: "A roadmap for frontend web development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <nav>
          <h1>Logo</h1>
          <ul>
            <li>
              <Link href="/javascript">Javascript</Link>
            </li>
            <li>
              <a href="#">Sign Up</a>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
