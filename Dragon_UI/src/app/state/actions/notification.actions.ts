import { Action } from '@ngrx/store';
import { ApiError } from '../models/api-error.model';

export const SET_SUCCESS_NOTIFICATION = '[Notification] SET SUCCESS NOTIFICATION';
export const HIDE_NOTIFICATION = '[Notification] SET NOTIFICATION FINISHED';
export const SET_ERROR_NOTIFICATION = '[Notification] SET ERROR NOTIFICATION';
export const SET_API_ERROR_NOTIFICATION = '[Notification] SET API ERROR NOTIFICATION';

export class SetSuccessNotification implements Action {
    readonly type = SET_SUCCESS_NOTIFICATION;
    constructor(public text: string, public hideAfterTimer: boolean = true) { }
}

export class SetErrorNotification implements Action {
    readonly type = SET_ERROR_NOTIFICATION;
    constructor(public text: string) { }
}

export class HideNotification implements Action {
    readonly type = HIDE_NOTIFICATION;
    constructor(public id: number) {}
}

export class SetApiErrorNotification implements Action {
    readonly type = SET_API_ERROR_NOTIFICATION;
    constructor(public apiError: ApiError) { }
}

export type NotificationActions
    = SetSuccessNotification
    | HideNotification
    | SetErrorNotification
    | SetApiErrorNotification;