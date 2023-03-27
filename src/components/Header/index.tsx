import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../redux/theme/theme.thunk";
import { themeData } from "../../mock-data/theme-data";

const Header = () => {
  const themeState = useSelector((state: any) => state?.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    document.documentElement.className = "";
    document.documentElement.classList.add(`${themeState?.theme?.theme}`);

    Array.isArray(themeState?.theme?.properties) &&
      themeState?.theme?.properties.forEach((prop: any) => {
        document.documentElement.style.setProperty(
          `${prop.property}`,
          `${prop.color}`
        );
      });
  }, [themeState]);
  const changeTheme = (theme: any) => {
    return themeData.find((th) => {
      return th.theme === theme;
    });
  };
  // set theme
  const handleClick = (theme: any) => {
    const _theme = changeTheme(theme);
    localStorage.setItem("USER_THEME", JSON.stringify(_theme));
    dispatch(setTheme(_theme));
  };
  return (
    <div>
      <div className="theme-options">
        <div
          id="theme-light"
          onClick={() => handleClick("theme_light")}
          className={`${themeState?.theme === "theme_light" ? "active" : ""}`}
        ></div>
        <div
          id="theme-blue"
          onClick={() => handleClick("theme_blue")}
          className={`${themeState?.theme === "theme_blue" ? "active" : ""}`}
        ></div>
        <div
          id="theme-orange"
          onClick={() => handleClick("theme_orange")}
          className={`${themeState?.theme === "theme_orange" ? "active" : ""}`}
        ></div>
        <div
          id="theme-purple"
          onClick={() => handleClick("theme_purple")}
          className={`${themeState?.theme === "theme_purple" ? "active" : ""}`}
        ></div>
        <div
          id="theme-green"
          onClick={() => handleClick("theme_green")}
          className={`${themeState?.theme === "theme_green" ? "active" : ""}`}
        ></div>
        <div
          id="theme-black"
          onClick={() => handleClick("theme_dark")}
          className={`${themeState?.theme === "theme_dark" ? "active" : ""}`}
        ></div>
      </div>
    </div>
  );
};

export default Header;
