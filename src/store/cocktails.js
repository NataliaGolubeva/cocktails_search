import axios from "axios";

const initialState = {
  cocktail: [],
  loading: false,
  cocktailsToSearch: "",
  error: false,
};
// types
const SET_COCKTAIL = "SET_COCKTAIL";

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
        console.log(response.data);
        //   {
        //   type: "SET_COCKTAILS",
        //   payload: response.data.results,
        // }
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
    // case SET_COCKTAILS:
    // return { ...state, cocktailsToSearch: payload, loading: false, error: };

    default:
      return state;
  }
};

export default cocktailReducer;
