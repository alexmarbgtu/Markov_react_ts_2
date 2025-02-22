import { Routes, Route } from 'react-router-dom'

import Main from './routes/Main/Main'
import Slider from './routes/Slider/Slider'

import './App.css'


function App() {
	return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/slider' element={<Slider />} />
    </Routes>
	)
}

export default App
