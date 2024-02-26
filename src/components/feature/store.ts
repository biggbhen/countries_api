import { configureStore } from '@reduxjs/toolkit';
import featureReducer from './feature';

const store: any = configureStore({
	reducer: {
		feature: featureReducer,
	},
});

export default store;
export type AppDispatch = typeof store.dispatch;
