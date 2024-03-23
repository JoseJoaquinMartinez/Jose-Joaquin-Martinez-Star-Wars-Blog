import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./views/home";
import { SingleCharacter } from "./views/SingleCharacter";
import { SinglePlanet } from "./views/SinglePlanet";
import { SingleVehicle } from "./views/SingleVehicle";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/single/characters/:uid" element={<SingleCharacter />} />
          <Route path="/single/planets/:uid" element={<SinglePlanet />} />
          <Route path="/single/vehicles/:uid" element={<SingleVehicle />} />
          <Route
            path="*"
            element={<h1>The force is not strong enough on YOU!</h1>}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
