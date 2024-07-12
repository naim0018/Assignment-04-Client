import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { store } from './redux/store.ts'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/routes.tsx'
import { Toaster } from 'sonner'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Toaster position='top-center'/>
  <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
