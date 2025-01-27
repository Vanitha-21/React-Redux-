
import { Outlet } from "react-router-dom";
import NavBar from "./NavBarPanel.jsx";
import { Provider } from "react-redux";
import store from "../store/store.jsx";
const RootLayout = () => {
  return (
    <>
      <Provider store={store}>
        <NavBar />
        <main>
          <Outlet />
        </main>
      </Provider>
    </>
  );
};

export default RootLayout;