
import Home from "./components/home";
import React from 'react'
// import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
// import { BrowserRouter as Router} from "react-router-dom";
import 'antd/dist/reset.css';
import store from './storageBox/main.jsx'
import "./App.css"

function App() {
  return (
    <Provider store={store}>
      <Home />
  </Provider>
  );
}

export default App;
