import { Action } from '@ngrx/store';

export const TRY_PERMISSIONS_LOAD = '[Permission] TRY PERMISSIONS LOAD PERMISSIONS';
export const LOAD_PERMISSIONS_SUCCESS = '[Permission] LOAD PERMISSIONS SUCCESS';
export const LOAD_PERMISSIONS_FAIL = '[Permission] LOAD PERMISSIONS FAIL';

export const TRY_REFRESH_PERMISSIONS = '[Permission] TRY REFRESH PERMISSIONS';


export class TryPermissionsLoad implements Action {
    readonly type = TRY_PERMISSIONS_LOAD;
    constructor(public redirectToHome: boolean = true) {}
}

export class LoadPermissionsSuccess implements Action {
    readonly type = LOAD_PERMISSIONS_SUCCESS;
    constructor(public permissions: any, public redirectToHome: boolean = true) {}
}

export class LoadPermissionsFail implements Action {
    readonly type = LOAD_PERMISSIONS_FAIL;
    constructor(public error: any) {}
}

export class TryRefreshPermissions implements Action {
    readonly type = TRY_REFRESH_PERMISSIONS;
    constructor(public redirectToHome: boolean = true) {}
}

export type PermissionActions
    = TryPermissionsLoad
    | LoadPermissionsSuccess
    | LoadPermissionsFail
    | TryRefreshPermissions;