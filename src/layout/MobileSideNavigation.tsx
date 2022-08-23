import classNames from "classnames";
import { Link } from "react-router-dom";
import { logOut } from "../store/authSlice";
import { closeMobileLinks } from "../store/navigationSlice";
import { useAppSelector, useAppDispatch } from "../store/storeHooks";

const MobileSideNavigation = (): JSX.Element => {
  const isMobileNavigationOpen: boolean = useAppSelector(
    (state) => state.navigationSlice.mobileLinksOpen
  );
  const token = useAppSelector((state) => state.authSlice.token);
  const dispatch = useAppDispatch();

  const active = classNames("navigation-mobile__nav", {
    "navigation-mobile__nav--open": isMobileNavigationOpen,
  });

  const closeLinksHandler = () => {
    dispatch(closeMobileLinks());
  };

  const loguotHandler = () => {
    dispatch(closeMobileLinks());
    dispatch(logOut());
  };
  return (
    <nav className={active}>
      <ul className="navigation-mobile__list">
        <li className="navigation-mobile__item">
          <Link onClick={closeLinksHandler} to="/home">
            Start
          </Link>
        </li>
        <li className="navigation-mobile__item">
          <Link onClick={closeLinksHandler} to="/account">
            Konta
          </Link>
        </li>
        <li className="navigation-mobile__item">
          <Link onClick={closeLinksHandler} to="/operation">
            Operacje
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileSideNavigation;
