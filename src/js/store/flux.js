const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      favItem: JSON.parse(localStorage.getItem("favItems")) || [],
      characters: JSON.parse(localStorage.getItem("characters")) || [],
      planets: JSON.parse(localStorage.getItem("planets")) || [],
      vehicles: JSON.parse(localStorage.getItem("vehicles")) || [],
    },
    actions: {
      getCharacters: async () => {
        try {
          const response = await fetch("https://www.swapi.tech/api/people/");
          if (!response.ok) {
            throw new Error("Error al obtener los personajes de la API");
          }
          const data = await response.json();
          const characters = data.results;

          localStorage.setItem("characters", JSON.stringify(characters));

          await setStore({ characters });
        } catch (error) {
          console.error("Error al obtener los personajes:", error);
        }
      },
      getPlanets: async () => {
        try {
          const response = await fetch("https://www.swapi.tech/api/planets/");
          if (!response.ok) {
            throw new Error("Error al obtener los planetas de la API");
          }
          const data = await response.json();
          const planets = data.results;

          localStorage.setItem("planets", JSON.stringify(planets));

          await setStore({ planets });
        } catch (error) {
          console.error("Error al obtener los planetas:", error);
        }
      },
      getVehicles: async () => {
        try {
          const response = await fetch("https://www.swapi.tech/api/vehicles/");
          if (!response.ok) {
            throw new Error("Error al obtener los vehiculos de la API");
          }
          const data = await response.json();
          const vehicles = data.results;

          localStorage.setItem("vehicles", JSON.stringify(vehicles));

          await setStore({ vehicles });
        } catch (error) {
          console.error("Error al obtener los vehiculos:", error);
        }
      },
      addToFavorites: (element, type) => {
        const store = getStore();

        const isAlreadyInFavorites = store.favItem.some(
          (item) => item.name === element.name && item.category === type
        );
        if (!isAlreadyInFavorites) {
          const newItem = { ...element, category: type };
          const updatedFavItems = [...store.favItem, newItem];
          setStore({ favItem: updatedFavItems });
        }
      },
      deleteFromFavorites: (element) => {
        const store = getStore();
        const updateFavItems = store.favItem.filter((item) => item !== element);
        setStore({ favItem: updateFavItems });
      },
    },
  };
};

export default getState;
