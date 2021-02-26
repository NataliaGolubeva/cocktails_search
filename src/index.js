import store from "./store/configureStore";
import { setCocktails } from "./store/cocktails";

//console.log(store.getState());

function updateCounterValue() {
  const { counter } = store.getState().counter;
  document.getElementById("counter").innerHTML = counter;
  document.getElementById("counterfield").value = counter;
}
updateCounterValue();

store.subscribe(updateCounterValue);

document.getElementById("inc").onclick = function () {
  store.dispatch({ type: "INCREMENT" });
};
document.getElementById("dec").onclick = function () {
  store.dispatch({ type: "DECREMENT" });
};
document.getElementById("counterfield").oninput = function (e) {
  //console.log(e);
  store.dispatch({ type: "SET_VALUE", payload: parseInt(e.target.value) });
};

/// cocktails

document.getElementById("cocktailForm").onsubmit = (e) => {
  e.preventDefault();
  store.dispatch(
    setCocktails(document.querySelector("#cocktailForm input").value)
  );
  document.querySelector("#cocktailForm input").value = "";
};

function cocktailRender() {
  const { cocktailsToSearch, loading } = store.getState().cocktails;
  document.getElementById(
    "titel"
  ).innerText = store.getState().cocktails.cocktailsToSearch;
  if (loading) {
    document.getElementById("loading").style.display = "block";
  } else {
    document.getElementById("loading").style.display = "none";
  }
}

cocktailRender();

store.subscribe(cocktailRender);
