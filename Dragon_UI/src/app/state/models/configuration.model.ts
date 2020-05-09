export class Configuration {
    static fromResponse(configurationRAW: any): Configuration {
        return new this(
            ApiConfiguration.fromResponse(configurationRAW.api),
            configurationRAW.applicationId,
            configurationRAW.productId,
            configurationRAW.salesForceCallBackUrl);
    }

    constructor (
        public api: ApiConfiguration,
        public applicationId: number,
        public productId: number,
        public salesForceCallBackUrl: string
    ) {}
};

export class ApiConfiguration {
    static fromResponse(apiConfigurationRAW: any): ApiConfiguration {
        return new this(
            apiConfigurationRAW.qfe,
            apiConfigurationRAW.qfem,
            apiConfigurationRAW.qtmsso,
            apiConfigurationRAW.fp,
            apiConfigurationRAW.qtm,
            apiConfigurationRAW.fg,
            apiConfigurationRAW.auth,
            apiConfigurationRAW.dsc,
            apiConfigurationRAW.accounts,
            apiConfigurationRAW.esign,
            apiConfigurationRAW.launch,
            apiConfigurationRAW.defaultData,
            apiConfigurationRAW.saml
        );
    }

    constructor(
        public qfe: string,
        public qfem: string,
        public qtmsso: string,
        public fp: string,
        public qtm: string,
        public fg: string,
        public auth: string,
        public dsc: string,
        public accounts: string,
        public esign: string,
        public launch: string,
        public defaultData: string,
        public saml: string
    ) {}
};

export class Endpoints {
    public qfe: any;
    public qfem: any;
    public qtmsso: any;
    public fp: any;
    public qtm: any;
    public fg: any;
    public auth: any;
    public dsc: any;
    public accounts: any;
    public esign: any;
    public launch: any;
    public defaultData: any;
    public saml: any;

    constructor (configuration: Configuration) {
        this.qfe = {
            formPreviewUrl: configuration.api.qfe + 'qfe/execute/html',
        };
        this.qfem = {
            categoryUrl: configuration.api.qfem + 'categories',
            companyUrl: configuration.api.qfem + 'dealers',
            companyDealerSubscribeUrl: configuration.api.qfem + 'dealers/{dealerId}/subscriptions',
            companyDealerFavoriteUrl: configuration.api.qfem +  'dealers/{dealerId}/favorites',
            formSubscriptionUrl: configuration.api.qfem + 'forms/{id}/subscribe',
            formFavoritedUrl: configuration.api.qfem +  'forms/{id}/favorites',
            stateUrl: configuration.api.qfem + 'states',
            formUrl: configuration.api.qfem + 'forms/search',
            formSearchFavoriteUrl: configuration.api.qfem + 'forms/search/favorites',
            formFavoriteUrl: configuration.api.qfem + 'forms/favorites',            
            formGroupUrl: configuration.api.qfem + 'forms/search/groups',
            roleUrl: configuration.api.qfem + 'forms/roles',
        };
        this.qtmsso = {
            loginUrl: configuration.api.qtmsso + '?domainUrl=http://localhost:8080/&forceLogin=true'
        };
        this.fp = {
            historyUrl: configuration.api.fp + 'formpackages',
            recentFormsUrl: configuration.api.fp + 'recentforms',
            recentFormsDetailUrl: configuration.api.fp + 'recentformsdetail',
        };
        this.qtm = {
            generateUrl: configuration.api.qtm + 'qfe/regenerate',
            executeUrl: configuration.api.qtm + 'qfe/execute',
            advisorUrl: configuration.api.qtm + 'advisors',
            clientUrl: configuration.api.qtm + 'parties',
        };
        this.fg = {
            formGroupUrl: configuration.api.fg + 'formgroups',
            formGroupPublicUrl: configuration.api.fg + 'formgroups/public',
            formGroupPrivateUrl: configuration.api.fg + 'formgroups/private',
            formGroupGetByFormIdUrl: configuration.api.fg + 'formgroups/withform',
        };

        this.auth = configuration.api.auth;
        this.dsc = {
            dataSourceConnectionsUrl: configuration.api.dsc + 'datasourceconnections?productId={productId}&includeParents=false&onlyactive=true',
            dataSourceConnectionsUrlWithParams: configuration.api.dsc + 'datasourceconnections?productId={productId}&includeParents={includeParents}&onlyactive={onlyActive}',
            clientsByDataSourceConnectionIdUrl: configuration.api.dsc + 'datasourceconnections/{datasourceconnectionId}/clients?productId={productId}',
            clientAccountsUrl: configuration.api.dsc + 'datasourceconnections/{datasourceconnectionId}/clients/{clientId}/accounts?productId={productId}',
            connectionBaseUrl: configuration.api.dsc + 'datasourceconnections/{dataSourceConnectionId}',
            addConnectionUrl: configuration.api.dsc + 'datasources/{dataSourceId}/datasourceconnections',
            dataSources: configuration.api.dsc + 'datasources?productId={productId}',
            authenticate: configuration.api.dsc + 'datasources/{id}/datasourceconnections/auth',
            activate: configuration.api.dsc + 'datasourceconnections/activate?productId={productId}',
            salesforce: {
                userconnection: configuration.api.dsc + 'salesforce/userconnection'
            }
        };
        this.accounts = {
            company: configuration.api.accounts + 'company',
            logos:  configuration.api.accounts + 'logos',
            profile: configuration.api.accounts + 'users/myprofile',
            validUsername: configuration.api.accounts + 'users/username/isvalid',
            updatePassword: configuration.api.accounts + 'users/myprofile/password',
            user: configuration.api.accounts + 'users?username={usrName}',
            users: configuration.api.accounts + "users",
            passwordResetRequest: configuration.api.accounts + 'users/myprofile/passwords/reset?username={username}',
            passwordResetTokenVerification: configuration.api.accounts + 'users/myprofile/passwords/tokens/isvalid?token={token}',
            passwordReset: configuration.api.accounts + 'users/myprofile/passwords/reset',
            roles: configuration.api.accounts + 'roles',
            myBilling: configuration.api.accounts + 'accounts/mybilling',
            myBillingQuantity: configuration.api.accounts + 'accounts/mybilling/quantity',
            myBillingPlan: configuration.api.accounts + 'accounts/mybilling/plan',
            myBillingRate: configuration.api.accounts + 'accounts/mybilling/rate',
            myBillingCancellation: configuration.api.accounts + 'accounts/mybilling/cancellation',
            accountSetupProductPlanInvoices: configuration.api.accounts + 'accounts/plans',
            accountSetupBillingInfo: configuration.api.accounts + 'accounts/billing',
            accountSetup: configuration.api.accounts + 'accounts',
        };
        this.esign = {
            docusign: {
                base: configuration.api.esign + 'docusign/',
                oauth: configuration.api.esign + 'docusign/oauthtokens/',
                environments: configuration.api.esign + 'docusign/environments/'
            },
            signix: {
                base: configuration.api.esign + 'signix/',
                credentials: configuration.api.esign + 'signix/credentials/',
                environments: configuration.api.esign + 'signix/environments'
            }
        };
        this.launch = {
            base: configuration.api.launch,
            preview: configuration.api.launch + 'preview'
        };
        this.defaultData = {
            base: configuration.api.defaultData,
            defaultRecords: configuration.api.defaultData + 'records'
        };
        this.saml = {
            base: configuration.api.saml,
            ssodata: configuration.api.saml + 'QuikSAML/SAMLSessionAttributes'
        };
    }
}
