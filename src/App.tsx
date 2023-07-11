import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import { Home } from './pages'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index path={'/'} element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
