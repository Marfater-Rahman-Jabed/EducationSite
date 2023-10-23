
// import './App.css'

import { RouterProvider } from "react-router-dom"
// import Home from "./Pages/Home/Home"
import { router } from "./Routes/Routers"

function App() {


  return (
    <>

      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
