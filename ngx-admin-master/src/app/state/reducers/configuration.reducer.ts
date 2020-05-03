import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Configuration, Endpoints } from '../models/configuration.model';
import { ConfigurationActions, APP_CONFIGURATION_LOAD_SUCCESS } from '../actions/configuration.actions';

const selectFeature = createFeatureSelector<ConfigurationState>('configurationReducer');

//const endpoints:<Memoized = createSelector(selectFeature, (state: ConfigurationState) => state && state.endpoints);

export const ConfigurationSelectors = {
    selectFeature: selectFeature,
    selectFeature_Endpoints: createSelector(selectFeature, (state: ConfigurationState) => state && state.endpoints),
    selectFeature_applicationId: createSelector(selectFeature, (state: ConfigurationState) => state && state.configuration.applicationId ),
    selectFeature_productId: createSelector(selectFeature, (state: ConfigurationState) => state && state.configuration.productId ),
    selectFeature_salesForceCallBackUrl: createSelector(selectFeature, (state: ConfigurationState) => state && state.configuration.salesForceCallBackUrl ),
};

interface ConfigurationState {
    configuration: Configuration;
    endpoints: Endpoints;
}

export function ConfigurationReducer (
    state: ConfigurationState,
    action: ConfigurationActions
    ) {
        switch (action.type) {
            case APP_CONFIGURATION_LOAD_SUCCESS:
                return {
                    ...state,
                    configuration: action.configuration,
                    endpoints: new Endpoints(action.configuration)
                };
            default:
                return state;
        }
    };