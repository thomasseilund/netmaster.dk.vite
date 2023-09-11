import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Typography } from '@mui/material';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Typography component={'span'}>
      <App />
    </Typography>
  </React.StrictMode>,
)
