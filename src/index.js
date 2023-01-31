import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const container = document.getElementById("result")
const root = ReactDOM.createRoot(container)
root.render(<App tab="home" />)

