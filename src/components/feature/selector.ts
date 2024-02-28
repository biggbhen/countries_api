import { createSelector } from 'reselect';

// feature Selector
export const feat = (state: { feature: any }) => state.feature;
export const FeatureSelector = createSelector(feat, (state) => state);
