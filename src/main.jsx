//js simported
import App from "./App.jsx";
import { Provider } from "react-redux";
// css imports
import "./index.css";
// library import
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";

import { BrowserRouter } from "react-router-dom";
import store from "./Redux/store.js";
<script src="https://cdn.tailwindcss.com"></script>

ReactDOM.createRoot(document.getElementById("root")).render(
 
    <Provider store={store}>
    <BrowserRouter>
      <App />
      <Toaster />
    </BrowserRouter>
    </Provider>
  
);
