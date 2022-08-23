import { Fragment, useEffect } from "react";
import { setNavigationMode } from "../store/navigationSlice";
import { useAppDispatch, useAppSelector } from "../store/storeHooks";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";
import MobileSideNavigation from "./MobileSideNavigation";

const Navigation = (): JSX.Element => {
  const typeOfNavigation = useAppSelector(
    (state) => state.navigationSlice.navigation
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setNavigationMode());
  }, []);

  useEffect(() => {
    const checkViewportWidth = (element: UIEvent) => {
      dispatch(setNavigationMode());
    };

    window.addEventListener("resize", checkViewportWidth);

    return () => {
      window.removeEventListener("resize", checkViewportWidth);
    };
  }, [dispatch]);

  return (
    <nav>
      {typeOfNavigation === "desktop" && (
        <DesktopNavigation></DesktopNavigation>
      )}
      {typeOfNavigation === "mobile" && (
        <Fragment>
          <MobileNavigation></MobileNavigation>
          <MobileSideNavigation></MobileSideNavigation>
        </Fragment>
      )}
    </nav>
  );
};

export default Navigation;
