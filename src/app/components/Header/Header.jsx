export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-primary shadow-sm p-4 md:p-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl md:text-xl sm:text-lg font-normal text-background font-sans">Diego O. Mateus</h1>

        <nav className="hidden sm:block">
          <ul className="flex space-x-6 text-background font-sans">
            <li>
              <a href="#about" className="hover:underline">About</a>
            </li>
            <li>
              <a href="#projects" className="hover:underline">Projects</a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}