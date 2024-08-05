
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Dashboard from './Pages/Dashboard'
import HomePage from './Pages/Home'
import Jobs from './components/Jobs'
import Browse from './components/Browse'


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/signup',
    element: <Signup/>
  },
  {
    path: '/dashboard',
    element: <Dashboard/>
  },
  {
    path: '/jobs',
    element: <Jobs/>
  },
  {
    path: '/browse',
    element: <Browse/>
  },
])
function App() {

  return (
    <>
    
      <RouterProvider router={appRouter} />
  
    </>
  )
}

export default App
