import { Link } from "react-router-dom";

const DesktopNavigation = (): JSX.Element => {
  return (
    <nav className="navigation-desktop">
      <Link className="navigation__logo" to="/home">
        Balance
      </Link>
      <ul className="navigation__links--desktop">
        <li className="navigation__link--desktop">
          <Link to="home">Start</Link>
        </li>
        <li className="navigation__link--desktop">
          <Link to="account">Konta</Link>
        </li>
        <li className="navigation__link--desktop">
          <Link to="operation">Operacje</Link>
        </li>
        {/* button do logowania itd */}
      </ul>
    </nav>
  );
};

export default DesktopNavigation;
