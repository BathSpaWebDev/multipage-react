import { Outlet, Link } from "react-router-dom";

const Layout = ({darkmode, toggleDarkmode}) => {
  return (
    <div className={`main-layout ${darkmode ? 'dark' : ''}`}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
        <button onClick={toggleDarkmode}>{darkmode ? 'Light mode' : 'Dark mode'}</button>
      </nav>

      <Outlet />

    </div>
  )
};

export default Layout;