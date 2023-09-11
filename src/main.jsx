//component import
import App from './App.jsx';
// css imports
import './index.css';
// library import
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';

import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
       <App />
       <Toaster/>
  </BrowserRouter>
  
  
);
