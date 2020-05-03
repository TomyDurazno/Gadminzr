import { Transaction } from "./transaction.model";

export class Authentication {
    isLoggedIn: boolean;
    accessToken: string;
    refreshToken: string;
    customerClientId?: string;
    customerAccountId?: string;
    preSelectedFormIds?: number[];
    clientIds?: string[];
    repIds?: string[];
    rep1RecordID?: string;
    repNumbers?: string[];
    transactions?: Transaction[];
    eSignClientCode?: string;
    eSignAccountCode?: string;
    eSignRepCode?: string;
    eSignFirmCode?: string;
    eSignClientTransNumber?: string;
    eSignClientTransNumber2?: string;
    eSignClientTransNumber3?: string;
    eSignClientTransNumber4?: string;
    eSignClientTransCode?: string;
    eSignClientTransCodeType?: string;
    eSignClientTransCode2?: string;
    eSignClientTransCode2Type?: string;
    eSignClientTransCode3?: string;
    eSignClientTransCode3Type?: string;
    eSignClientTransCode4?: string;
    eSignClientTransCode4Type?: string;
    clientTransMetaData?: string;
    timeoutRedirectUrl?: string;
    enableESign?: boolean;
    enableClientSearch?: boolean;
    lockPrefilledFields?: boolean;
    eSignCallbackURL?: string;
    submitFormOn?: boolean;
    submitURL?: string;
    //TODO: dataSourceConnectionId not in the spec
    dataSourceConnectionId?: number;

    licenseId?: number;
    licenseName?: string;
    brokerDealerId?: number;
    clientId?: number;
    accountId?: number;
    redirectUrl?: string;


    static fromRaw(authRaw: any): Authentication {
        let auth = new Authentication();
        auth.accessToken = authRaw.AccessToken || authRaw.accessToken;
        auth.refreshToken = authRaw.RefreshToken || authRaw.refreshToken;
        auth.accountId = authRaw.accountId;
        auth.brokerDealerId = authRaw.brokerDealerId;
        auth.clientId = authRaw.clientId;
        auth.clientIds = authRaw.clientIds;
        auth.clientTransMetaData = authRaw.clientTransMetaData;
        auth.customerAccountId = authRaw.customerAccountId;
        auth.customerClientId = authRaw.customerClientId;
        auth.dataSourceConnectionId = authRaw.dataSourceConnectionId;
        auth.enableClientSearch = authRaw.enableClientSearch;
        auth.enableESign = authRaw.enableESign;
        auth.eSignAccountCode = authRaw.eSignAccountCode;
        auth.eSignCallbackURL = authRaw.eSignCallbackURL;
        auth.eSignClientCode = authRaw.eSignClientCode;
        auth.eSignClientTransCode = authRaw.eSignClientTransCode;
        auth.eSignClientTransCode2 = authRaw.eSignClientTransCode2;
        auth.eSignClientTransCode3 = authRaw.eSignClientTransCode3;
        auth.eSignClientTransCode4 = authRaw.eSignClientTransCode4;
        auth.eSignClientTransCodeType = authRaw.eSignClientTransCodeType;
        auth.eSignClientTransCode2Type = authRaw.eSignClientTransCode2Type;
        auth.eSignClientTransCode3Type = authRaw.eSignClientTransCode3Type;
        auth.eSignClientTransCode4Type = authRaw.eSignClientTransCode4Type;
        auth.eSignClientTransNumber = authRaw.eSignClientTransNumber;
        auth.eSignClientTransNumber2 = authRaw.eSignClientTransNumber2;
        auth.eSignClientTransNumber3 = authRaw.eSignClientTransNumber3;
        auth.eSignClientTransNumber4 = authRaw.eSignClientTransNumber4;
        auth.eSignFirmCode = authRaw.eSignFirmCode;
        auth.eSignRepCode = authRaw.eSignRepCode;
        auth.isLoggedIn = authRaw.isLoggedIn;
        auth.licenseId = authRaw.licenseId;
        auth.licenseName = authRaw.licenseName;
        auth.lockPrefilledFields = authRaw.lockPrefilledFields;
        auth.preSelectedFormIds = authRaw.preSelectedFormIds;
        auth.redirectUrl = authRaw.redirectUrl;
        auth.refreshToken = authRaw.refreshToken;
        auth.rep1RecordID = authRaw.rep1RecordID;
        auth.repIds = authRaw.repIds;
        auth.transactions = authRaw.transactions;
        auth.repNumbers = authRaw.repNumbers;
        auth.submitFormOn = authRaw.submitFormOn;
        auth.submitURL = authRaw.submitURL;
        auth.timeoutRedirectUrl = authRaw.timeoutRedirectUrl;
        return auth;
    }
}