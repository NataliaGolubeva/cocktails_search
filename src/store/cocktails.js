import axios from "axios";

const initialState = {
  cocktail: [],
  loading: false,
  cocktailsToSearch: "",
  error: false,
};
// types
const SET_COCKTAIL = "SET_COCKTAIL";
const SET_COCKTAILS = "SET_COCKTAILS";

//action
export const setCocktails = function (str) {
  return function (dispatch, getState) {
    dispatch({
      type: SET_COCKTAIL,
      payload: str,
    });
    axios(
      ` https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${
        getState().cocktails.cocktailsToSearch
      }`
    )
      .then((response) => {
        dispatch({
          type: "SET_COCKTAILS",
          payload: response.data.drinks,
        });
      })
      .catch();
  };
};
///drinks.strDrink
// reducer
const cocktailReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_COCKTAIL:
      return { ...state, cocktailsToSearch: payload, loading: true };
    case SET_COCKTAILS:
      return {
        ...state,
        loading: false,
        error: false,
        cocktail: payload,
      };

    default:
      return state;
  }
};

export default cocktailReducer;
