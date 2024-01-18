import React from 'react'
import { render } from 'preact';
import App from './App.tsx'
import './index.css'

const dom = document.getElementById('root');
render(  
<React.StrictMode>
  <App />
</React.StrictMode>, dom!);
