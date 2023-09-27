import Link from "next/link";
import { BsGithub, BsFacebook } from "react-icons/bs";

export const metadata = {
  title: "About",
  description: "A roadmap for frontend web development",
};

export default function page() {
  return (
    <main className="min-h-[50vh] mx-auto w-full 2xl:max-w-7xl px-4 md:px-8 mt-8">
      <h1 className="text-5xl font-bold">Welcome to Front-end Roadmap</h1>
      <br />

      <h2 className="text-3xl font-semibold">What is front-end roadmap?</h2>
      <p className="mt-4 text-lg">
        Front-end roadmap is a project created to help beginners wanting to
        learn about web development. The goal is to provide information on
        different technologies involved in web development process along with
        how each of them are used. The information are categorized depending on
        the technologies to learn.
      </p>
      <p className="mt-4 text-lg">
        We provide an overview for the technology and reasons if you should use
        it or not along with code examples and interactive code sandbox where
        required.
      </p>
      <h2 className="text-3xl font-semibold mt-6">About Me</h2>
      <p className="mt-4 text-lg">
        I am a student in University of Greenwich studying MA Web Design and
        Content Planning. I love coding and I have come to love web development
        even more recently. This project was developed to tackle the struggles I
        had when I started learning front-end development and maybe help people
        like you too (if you are a beginner).
      </p>
      <div className="flex gap-4 mt-4">
        <p>Connect with me on socials:</p>
        <Link
          href="https://github.com/kreylanc"
          className="ml-2"
          target="_blank"
        >
          <BsGithub size="1.8em" />
        </Link>
        <Link href="https://www.facebook.com/kreylanc" target="_blank">
          <BsFacebook size="1.8em" />
        </Link>
      </div>
    </main>
  );
}
