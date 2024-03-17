import { NavLink } from 'react-router-dom';

const MainNavbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/3d-portfolio/"
        exact
        className={`flex h-10 w-10 items-center justify-center rounded-lg bg-white font-bold shadow-md`}
      >
        <p className="blue-gradient_text">OC</p>
      </NavLink>
      <nav className="flex items-center justify-center gap-4 font-medium">
        <NavLink
          to="/3d-portfolio/about"
          className={({ isActive }) =>
            isActive ? 'text-blue-500' : 'text-black'
          }
        >
          About
        </NavLink>
        <NavLink
          to="/3d-portfolio/contact"
          className={({ isActive }) =>
            isActive ? 'text-blue-500' : 'text-black'
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/3d-portfolio/projects"
          className={({ isActive }) =>
            isActive ? 'text-blue-500' : 'text-black'
          }
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default MainNavbar;
