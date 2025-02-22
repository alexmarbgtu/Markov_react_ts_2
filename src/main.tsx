import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import Theme from './components/theme-provider/theme-provider'
import App from './App.jsx'

import './index.css'
import './components/theme-provider/themes.css'

import './fonts/Roboto.ttf'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<StrictMode>
		<BrowserRouter>
			<Theme>
				<App />
			</Theme>
		</BrowserRouter>
	</StrictMode>
)