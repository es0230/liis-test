import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app/App';
import { store } from './store';
import throttle from 'lodash.throttle';
import { saveState } from './store/browser-storage';

const container = document.getElementById('root')!;
const root = createRoot(container);

store.subscribe(throttle(() => {
	saveState(store.getState());
}, 500));

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);
