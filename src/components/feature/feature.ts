import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface RootState {
	theme: string;
	loading: boolean;
	error: any;
	countries: any[];
	country: any[];
}

const initialState: RootState = {
	theme: 'Dark',
	loading: true,
	error: null,
	countries: [],
	country: [],
};

export const getAllCountries = createAsyncThunk(
	'get/countries',
	async (payload, { rejectWithValue }) => {
		try {
			const response = await axios.get(`https://restcountries.com/v2/all`);

			if (response.status && response.status === 200) {
				return response.data;
			}

			return rejectWithValue(response.data);
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

export const getSingleCountry = createAsyncThunk(
	'get/country',
	async (payload: any, { rejectWithValue }) => {
		try {
			const response = await axios.get(
				`https://restcountries.com/v2/name/${payload.name}`
			);

			if (response.status && response.status === 200) {
				return response.data;
			}

			return rejectWithValue(response.data);
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

const featureSlice = createSlice({
	name: 'feature',
	initialState,
	reducers: {
		toggleTheme: (state, action: PayloadAction<any>) => {
			state.theme = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getAllCountries.pending, (state, action: PayloadAction<any>) => {
				state.loading = true;
			})
			.addCase(
				getAllCountries.fulfilled,
				(state, action: PayloadAction<any>) => {
					state.countries = action.payload;
					state.loading = false;
				}
			)
			.addCase(
				getAllCountries.rejected,
				(state, action: PayloadAction<any>) => {
					state.loading = false;
					state.error = action.payload;
				}
			)
			.addCase(
				getSingleCountry.pending,
				(state, action: PayloadAction<any>) => {
					state.loading = true;
				}
			)
			.addCase(
				getSingleCountry.fulfilled,
				(state, action: PayloadAction<any>) => {
					state.country = action.payload;
					state.loading = false;
				}
			)
			.addCase(
				getSingleCountry.rejected,
				(state, action: PayloadAction<any>) => {
					state.loading = false;
					state.error = action.payload;
				}
			);
	},
});

export const { toggleTheme } = featureSlice.actions;
export default featureSlice.reducer;
