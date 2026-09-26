import { Header, Footer, ScrollTop } from "./Components";

import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <ScrollTop />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
