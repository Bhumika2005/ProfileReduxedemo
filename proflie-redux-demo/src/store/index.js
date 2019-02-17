import { applyMiddleware, createStore, compose } from 'redux';
import reducers from '../reducers/index';
import thunk from 'redux-thunk';

export function configureStore() {

	const middlewares = [];
	if (process.env.NODE_ENV === `development`) {
		middlewares.push(thunk);
	}

	let storeEnhancer  = compose(applyMiddleware(...middlewares));

    try {
		return createStore(reducers, storeEnhancer);
	} catch(ex) {
		throw ex;
	}
}