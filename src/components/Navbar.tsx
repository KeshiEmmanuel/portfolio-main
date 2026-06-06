export const Navbar = () => {
  return (
    <nav className="px-4 lg:px-0  flex items-center justify-between pt-4">
      <small className="text-zinc-500 text-sm">Est 2008.</small>
      <ul className="flex items-center gap-2">
        <li>
          <a href="#projects" className="text-zinc-300 cursor-pointer">
            /projects
          </a>
        </li>
        <li>
          <a className="text-zinc-300 cursor-pointer">/resume.cv</a>
        </li>
      </ul>
    </nav>
  );
};
