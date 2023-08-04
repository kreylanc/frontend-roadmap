function Dropdown({ children }) {
  return (
    <div
      className="absolute w-32 shadow-light dark:shadow-neu z-50 p-1 top-16 flex flex-col bg-neutral-50 dark:bg-darkPurple ring-1 ring-zinc-700"
      role="menu"
    >
      {children}
    </div>
  );
}

export default Dropdown;
