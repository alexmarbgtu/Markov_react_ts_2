import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import Theme from './components/theme-provider/theme-provider'
import App from './App.jsx'

import './index.css'
import './components/theme-provider/themes.css'

import './assets/fonts/Roboto.ttf'
import { store } from './store/store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Theme>
					<App />
				</Theme>
			</BrowserRouter>
		</Provider>
	</StrictMode>
)