import { BrowserRouter } from "react-router-dom";
import RouterComponent from "./routes";
import { getCurrentTheme } from "./utils/localstorage";
import "./stylesheet/global.css";
import "./stylesheet/switcher.scss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTheme } from "./redux/theme/theme.thunk";
import { getUsers } from "./redux/auth/auth.thunk";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const currentTheme = getCurrentTheme();
    if (currentTheme) {
      dispatch(setTheme(currentTheme));
      dispatch(getUsers());
    }
  }, []);

  return (
    <BrowserRouter>
      <RouterComponent />
    </BrowserRouter>
  );
}

export default App;
