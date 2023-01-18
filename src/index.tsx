import throttle from 'lodash.throttle';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app/App';
import { NameSpace } from './const';
import { store } from './store';
import { appDataInitialState, fetchHotels } from './store/app-data/app-data';
import { saveState } from './store/browser-storage';
import { userDataInitialState } from './store/user-data/user-data';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

store.subscribe(throttle(() => {
	const { DATA: { favoriteHotels }, USER: { isAuthorized } } = store.getState();

	const stateToSave = {
		[NameSpace.Data]: {
			...appDataInitialState,
			favoriteHotels,
		},
		[NameSpace.User]: {
			...userDataInitialState,
			isAuthorized,
		}
	};

	saveState(stateToSave);
}, 500));

store.dispatch(fetchHotels());

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);
