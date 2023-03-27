export const isLoggedIn = () => {
  let token = localStorage.getItem("ACCESS_TOKEN");
  if (token !== undefined && token !== "" && token !== null) {
    return true;
  } else {
    return false;
  }
};

export const getCurrentTheme = () => {
  let theme = localStorage.getItem("USER_THEME");
  theme = JSON.parse(theme);
  if (theme !== undefined && theme !== "" && theme !== null) {
    return theme;
  } else {
    return null;
  }
};
