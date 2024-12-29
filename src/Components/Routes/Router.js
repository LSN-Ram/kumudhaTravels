import React, { Suspense } from "react";
import { Styles } from "../styles/styles";
import Header from "../Navbar/Header";
import Home from "../../pages/Home";
import Footer from "../Footer/Footer";
import { FaWhatsapp } from "react-icons/fa";

const Router = () => {
  const whatsappNumber = "917388886627";
  const message = "Hello! I would like to inquire about your travel services.";
  return (
    <>
      <Suspense fallback={null}>
        <Styles />
        <Header />
        <Home />
        {/* <Routes>
          {routes.map((routeItem) => {
            const Component = lazy(() =>
              import(`../../pages/${routeItem.component}`)
            );

            return (
              <Route
                key={routeItem.component}
                path={routeItem.path}
                exact={routeItem.exact}
                component={<Component />}
              />
            );
          })}
        </Routes> */}
        <Footer />
        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            message
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            backgroundColor: "#25D366",
            color: "#fff",
            borderRadius: "50%",
            padding: "10px",
            fontSize: "40px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#128C7E";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#25D366";
          }}
        >
          <FaWhatsapp />
        </a>
      </Suspense>
    </>
  );
};

export default Router;
