function DropdownItem({ children, toggle }) {
  return (
    <button
      onClick={toggle}
      className="flex gap-2 text-sm items-center p-2 dark:hover:bg-gray-600/50 hover:bg-gray-300  focus:bg-gray-600/50 focus:outline-none rounded-sm transition-colors"
      role="option"
    >
      {children}
    </button>
  );
}

export default DropdownItem;
