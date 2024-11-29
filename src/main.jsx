import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Route, Routes } from 'react-router';
import SingleMovie from './singleMovie.jsx';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Toaster />
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/movies/:id" element={<SingleMovie />} />
		</Routes>
	</BrowserRouter>,
);
