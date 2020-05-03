import { AuthenticationActions, LOGOUT, LOGIN_FROM_URL } from '../actions/authentication.actions';
import { Authentication } from '../models/authentication.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const selectFeature = createFeatureSelector<Authentication>('authenticationReducer');

export const AuthenticationSelectors = {
    selectFeature:
    selectFeature,
    selectFeature_IsLoggedIn: createSelector(selectFeature, (state: Authentication) => state.isLoggedIn ),
    selectFeature_AccessToken: createSelector(selectFeature, (state: Authentication) => state.accessToken ),
    selectFeature_RedirectUrl: createSelector(selectFeature, (state: Authentication) => state.redirectUrl ),
    selectFeature_TimeoutRedirectUrl: createSelector(selectFeature, (state: Authentication) => state.timeoutRedirectUrl ),
    selectFeature_LicenseName: createSelector(selectFeature, (state: Authentication) => state.licenseName ),
    selectFeature_ClientId: createSelector(selectFeature, (state: Authentication) => state.clientId ),
    selectFeature_AccountId: createSelector(selectFeature, (state: Authentication) => state.customerAccountId ),
    selectFeature_PreSelectedForms: createSelector(selectFeature, (state: Authentication) => state.preSelectedFormIds ),
    selectFeature_PreSelectedClients: createSelector(selectFeature, (state: Authentication) => state.clientIds ),
    selectFeature_EnableClientSearch: createSelector(selectFeature, (state: Authentication) => state.enableClientSearch ),
};

const initialState: Authentication = {
    isLoggedIn: false,
    accessToken: undefined,
    refreshToken: undefined,
    licenseId: undefined,
    licenseName: undefined,
    brokerDealerId: undefined,
    enableESign: undefined,
    clientId: undefined,
    accountId: undefined,
    redirectUrl: undefined,
    preSelectedFormIds: []
};

export function AuthenticationReducer (
    state: Authentication = initialState,
    action: AuthenticationActions
    ) {
        switch (action.type) {
            case LOGIN_FROM_URL:
                 let newState = Object.assign({}, state, action.payload);
                 return {
                     ...newState,
                     isLoggedIn: true
                 };

            case LOGOUT:
                return {...state,
                    accessToken: undefined,
                    refreshToken: undefined,
                    isLoggedIn: false
                };
            default:
                return state;
        }
    };