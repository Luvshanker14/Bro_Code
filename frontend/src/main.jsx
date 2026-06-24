import React from 'react'
import ReactDOM from 'react-dom/client'
import axios from 'axios'
import App from './App.jsx'

import { FavoriteBooksProvider } from './FavoriteBooksContext';
import { API_URL } from './config';

import './index.css'

axios.defaults.baseURL = API_URL;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FavoriteBooksProvider>
    <App/>
    </FavoriteBooksProvider>
  </React.StrictMode>,
)
