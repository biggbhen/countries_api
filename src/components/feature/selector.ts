import { createSelector } from '@reduxjs/toolkit';

// feature Selector
export const feat = (state: { feature: any }) => state.feature;
export const FeatureSelector = createSelector(feat, (state) => state);
