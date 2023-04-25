import "../globals.css";
import { Raleway } from "next/font/google";
import Header from "../../components/Header";

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
        <Header />
        {children}
      </body>
    </html>
  );
}
