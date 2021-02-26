// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import reducer from "./reducer";
// import logger from "./middleware/logger";

// export default function () {
//   return configureStore({
//     reducer,
//     middleware: [...getDefaultMiddleware(), logger({ destination: "console" })],
//   });
// }

import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
