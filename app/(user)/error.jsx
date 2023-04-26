"use client";

export default function error({ error, reset }) {
  return (
    <div>
      This isn't loading: {error.message}
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
}
