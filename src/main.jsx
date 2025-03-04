import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {CartProvider} from "./contexts/CartContext.jsx";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <CartProvider>
          <QueryClientProvider client={queryClient}>
              <App />
          </QueryClientProvider>
      </CartProvider>
  </StrictMode>,
)
