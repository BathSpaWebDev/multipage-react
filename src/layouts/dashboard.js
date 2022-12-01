import { Outlet, Link } from "react-router-dom";

const Layout = ({darkmode, toggleDarkmode}) => {
  return (
    <div className={`dahshboard-layout ${darkmode ? 'dark' : ''}`}>
      <nav>
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/">Back to Home</Link>
          </li>
        </ul>
        <button onClick={toggleDarkmode}>{darkmode ? 'Light mode' : 'Dark mode'}</button>
      </nav>

      <Outlet />

    </div>
  )
};

export default Layout;