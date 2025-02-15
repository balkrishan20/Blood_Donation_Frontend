import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import SignUp from './components/auth/SignUp/signup'
import SignIn from './components/auth/SignIn/SignIn'
import UserSidebar from './components/shared/UserSidebar'
import UserNavbar from './components/shared/userNavbar'
import UserHome from './components/shared/UserHome'



const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/signup',
    element: <SignUp/>
  },
  {
    path: '/SignIn',
    element: <SignIn/>
  },
  {
    path: '/sidebar',
    element: <UserSidebar/>
  },
  {
    path: '/Navbar',
    element: <UserNavbar/>
  },
  {
    path: '/userhome',
    element: <UserHome/>
  }

])
function App() {

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default App