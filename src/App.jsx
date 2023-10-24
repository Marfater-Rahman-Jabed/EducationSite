
// import './App.css'

import { RouterProvider } from "react-router-dom"
// import Home from "./Pages/Home/Home"
import { router } from "./Routes/Routers"

function App() {


  return (
    <div className="overflow-x-clip">

      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
