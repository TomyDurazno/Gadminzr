export class User {

    public static fromRaw(record: any){
        return new User(
            record.userId,
            record.username,
            record.name,
            record.firstName,
            record.middleName,
            record.lastName,
            record.suffix,
            record.email,
            record.password,
            record.appRoleId,
            record.appRole
        );
    }

    public constructor(
        public id?: number,
        public username?: string,
        public firstName?: string,
        public middleName?: string,
        public lastName?: string,
        public suffix?: string,
        public email?: string,
        public password?: string,
        public appRoleId?: number,
        public appRole?: string,
        public title?: string,
    )
    {}
}