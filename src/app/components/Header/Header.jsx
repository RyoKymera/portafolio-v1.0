

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-primary shadow-sm p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-background font-sans">Diego O. Mateus</h1>

        {/* Enlaces o íconos de navegación */}
        <nav>
          <ul className="sm:flex space-x-6 text-background font-sans">
            <li><a href="#about" className="hover:underline">Sobre mí</a></li>
            <li><a href="#projects" className="hover:underline">Proyectos</a></li>
            <li><a href="#contact" className="hover:underline">Contacto</a></li>
          </ul>

          {/* Menú móvil (inicialmente oculto, se puede implementar luego) */}
          <div className="sm:hidden">
            {/* Aquí podrías poner un ícono de menú hamburguesa más adelante */}
          </div>
        </nav>
      </div>
    </header>
  );
}