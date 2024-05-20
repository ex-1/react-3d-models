import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Models from './pages/Models'
import Documentation from './pages/Documentation'
import Portfolio from './pages/Portfolio'

import { getConfig } from './utils/getConfig'
import config from './config/page_title.config.json'

import './styles/globals.scss'
import './styles/bootstrap-grid.min.css'

const c = getConfig(config)
const router = createBrowserRouter([
	{ path: '/', element: <Models title={c.main} /> },
	{
		path: '/documentation',
		element: <Documentation title={c.documentation} />
	},
	{ path: '/portfolio', element: <Portfolio title={c.portfolio} /> }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
