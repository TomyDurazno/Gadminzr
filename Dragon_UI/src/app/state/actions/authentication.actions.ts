import { Action } from '@ngrx/store';

import { Authentication } from '../models/authentication.model';

export const LOGIN_FROM_URL = '[Authentication] GET_FROM_URL';
export const LOGOUT = '[Authentication] LOGOUT';

export const TRY_OPEN_INVALID_SESSION_MODAL = '[Authentication] Try Open Invalid Session Modal';

export const TRY_GET_SSO_DATA = '[Authentication] TRY GET SSO DATA';
export const GET_SSO_DATA_SUCCESS = '[Authentication] GET SSO DATA SUCCESS';
export const GET_SSO_DATA_FAIL = '[Authentication] GET SSO DATA FAIL';


export class LoginFromUrl implements Action {
    readonly type = LOGIN_FROM_URL;
    constructor(public payload: Authentication) { }
}

export class Logout implements Action {
    readonly type = LOGOUT;
    constructor() {}
}

export class TryOpenInvalidSessionModal implements Action {
    readonly type = TRY_OPEN_INVALID_SESSION_MODAL;
    constructor(public message: string, public redirectTo: string) {}
}


export class TryGetSSOData implements Action {
    readonly type = TRY_GET_SSO_DATA;
    constructor(public authToken: string, public refreshToken: string) {}
}

export class GetSSODataSuccess implements Action {
    readonly type = GET_SSO_DATA_SUCCESS;
    constructor() {}
}

export class GetSSODataFail implements Action {
    readonly type = GET_SSO_DATA_FAIL;
    constructor(public error: any) {}
}

export type AuthenticationActions
    = LoginFromUrl
    | Logout
    | TryGetSSOData
    | GetSSODataSuccess
    | GetSSODataFail;