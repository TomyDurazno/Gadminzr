import { Action } from '@ngrx/store';
import { Configuration } from '../models/configuration.model';

export const TRY_APP_CONFIGURATION_LOAD = '[Configuration] TRY LOAD';
export const APP_CONFIGURATION_LOAD_SUCCESS = '[Configuration] LOAD SUCCESS';
export const APP_CONFIGURATION_LOAD_FAIL = '[Configuration] LOAD FAIL';

export class TryLoadAppConfig implements Action {
    readonly type = TRY_APP_CONFIGURATION_LOAD;
    constructor () {}
}

export class AppConfigLoaded implements Action {
    readonly type = APP_CONFIGURATION_LOAD_SUCCESS;
    constructor (public configuration: Configuration) {}
}

export class AppConfigLoadFail implements Action {
    readonly type = APP_CONFIGURATION_LOAD_FAIL;
    constructor (public error: any) {}
}

export type ConfigurationActions
    = TryLoadAppConfig
    | AppConfigLoaded
    | AppConfigLoadFail;