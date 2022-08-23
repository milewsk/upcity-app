import classNames from "classnames";
import { Link } from "react-router-dom";
import { closeMobileLinks, openMobileLinks } from "../store/navigationSlice";
import { useAppSelector, useAppDispatch } from "../store/storeHooks";

const MobileNavigation = (): JSX.Element => {
  const isMobileNavigationOpen: boolean = useAppSelector(
    (state) => state.navigationSlice.mobileLinksOpen
  );
  const dispatch = useAppDispatch();

  const changeNavigationBackground: string = classNames("naviogation__mobile", {
    "full-fill": isMobileNavigationOpen,
  });

  const burgerMenuHandler = () => {
    isMobileNavigationOpen
      ? dispatch(closeMobileLinks)
      : dispatch(openMobileLinks());
  };
  return (
    <nav className={changeNavBackground}>
      <Link className="navigation__logo" to="/home">
        Balance
      </Link>
      <button
        className={active}
        aria-label="Toggle Mobile Menu Button"
        onClick={burgerMenuHandler}
      >
        <span className="hm-bar hm-bar-one"></span>
        <span className="hm-bar hm-bar-two"></span>
        <span className=" hm-bar hm-bar-three"></span>
      </button>
    </nav>
  );
};

export default MobileNavigation;
