import { configureStore } from "@reduxjs/toolkit";
import customSlicer from "../redux/ReduxFunctions"

const redStore = configureStore({
    reducer: {
        ankur: customSlicer,
    },
})

export default redStore;