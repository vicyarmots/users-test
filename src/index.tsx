import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const reduxStore = store();

const persistor = persistStore(reduxStore);

root.render(
  <Provider store={reduxStore}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
