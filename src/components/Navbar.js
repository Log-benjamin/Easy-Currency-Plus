import { NavLink, useMatch, useResolvedPath } from 'react-router-dom';
import moment from 'moment';

export default function Navbar() {
  const date = moment().format('MMMM DD YYYY');
  return (
    <header>
      <nav className="nav-section">
        <div className="disp-date">
          <ul>
            <CustomeLink to="/">
              <i className="fa-solid fa-circle-chevron-left fa-xl" />
            </CustomeLink>
            <h3>
              {date}
            </h3>
          </ul>
        </div>
        <ul className="micandsetting">
          <CustomeLink to="/micsearch"><i className="fa-solid fa-microphone-lines fa-lg" /></CustomeLink>
          <CustomeLink to="/setting"><i className="fa-solid fa-gear fa-lg" /></CustomeLink>
        </ul>
      </nav>
    </header>
  );
}

function CustomeLink({ to, children }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? 'active' : ''}>
      <NavLink to={to}>{children}</NavLink>
    </li>
  );
}
