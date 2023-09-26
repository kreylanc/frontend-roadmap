import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center h-[60vh] mx-auto w-full 2xl:max-w-7xl px-4 md:px-8">
      <h1 className="text-5xl font-bold">Page Not Found</h1>
      <p className="mt-4">It seems that you have gone out of track</p>
      <p className="mt-4">
        Return
        <Link href="/" className="bg-primaryYellow text-neutral-800 mx-2 p-2">
          Home
        </Link>
        or use the links from the navigation bar
      </p>
    </main>
  );
}
