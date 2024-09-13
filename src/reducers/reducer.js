export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DOCTORS":
      return { ...state, data: action.payload };
    case "TOGGLE_THEME":
      return { ...state, theme: action.payload };
    case "ADD_FAV": {
      const updatedFavs = [...state.favorites, action.payload];
      localStorage.setItem("favorites", JSON.stringify(updatedFavs));
      return { ...state, favorites: updatedFavs };
    }
    case "REMOVE_FAV": {
      const filteredFavs = state.favorites.filter((fav) => fav.id !== action.payload.id)
      return {...state, favorites: filteredFavs}
    }
    case "LOAD_FAVS":
      return { ...state, favorites: action.payload };
    default:
      throw new Error("Acción no existente");
  }
};