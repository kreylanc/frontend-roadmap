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
        learn about web development. We provide information on different
        technologies involved in web development process along with how each of
        them are used. The information are categorized depending on the
        technologies to learn.
      </p>
      <p className="mt-4 text-lg">
        We provide an overview for the technology and reasons if you should use
        it or not along with code examples and interactive code sandbox where
        required.
      </p>
      <h2 className="text-3xl font-semibold">Contact Us</h2>
    </main>
  );
}
