import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

//import component
import CarouselCard from "./../component/CarouselCard.jsx";

//import styles
import "./../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  const handleFavElement = (element, type) => {
    actions.addToFavorites(element, type);
  };

  return (
    <>
      <div className="carousel d-flex flex-nowrap bg-dark border overflow-auto">
        {store.characters.map((element) => {
          return (
            <CarouselCard
              element={element}
              type="characters"
              key={element.uid}
              handleFavElement={handleFavElement}
            />
          );
        })}
      </div>
      <div className="carousel d-flex flex-nowrap bg-dark border overflow-auto">
        {store.planets.map((element) => {
          return (
            <CarouselCard
              element={element}
              type="planets"
              key={element.uid}
              handleFavElement={handleFavElement}
            />
          );
        })}
      </div>
      <div className="carousel d-flex flex-nowrap bg-dark border overflow-auto">
        {store.vehicles.map((element) => {
          return (
            <CarouselCard
              element={element}
              type="vehicles"
              key={element.uid}
              handleFavElement={handleFavElement}
            />
          );
        })}
      </div>
    </>
  );
};
