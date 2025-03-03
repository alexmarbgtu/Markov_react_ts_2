import { Routes, Route } from 'react-router-dom'

import Main from './routes/Main/Main'
import Slider from './routes/Slider/Slider'
import PersonalPage from './routes/PersonalPage/PersonalPage'

function App() {
	return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/slider' element={<Slider />} />
      <Route path='/user' element={<PersonalPage />} />
    </Routes>
	)
}

export default App
