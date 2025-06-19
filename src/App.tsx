/** Libraries */
import { BrowserRouter, Routes, Route } from 'react-router-dom'

/** Components */
import FeedPage from './pages/Feed/Feed'
import NotFoundPage from './pages/NotFound/NotFound'

/** Styles */
import './App.css'

/** App */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={FeedPage}></Route>
        <Route path='*' Component={NotFoundPage}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App