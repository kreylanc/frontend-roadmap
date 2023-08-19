"use client";

export default function error({ error, reset }) {
  return (
    <div className="flex flex-col 2xl:max-w-7xl mx-auto justify-center items-center px-4 h-64 lg:px-8">
      <h2>This isn't loading: {error.message}</h2>
      <button
        className="bg-primaryYellow text-neutral-800 p-2 px-4"
        onClick={() => reset()}
        role="button"
      >
        Reset
      </button>
    </div>
  );
}
