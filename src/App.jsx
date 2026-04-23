import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layout/DefaultLayout"
import Homepage from "./pages/HomePage"
import SingleMovie from "./pages/SingleMovie"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<Homepage />} />
            <Route path='/movies/:movieId' element={<SingleMovie />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
