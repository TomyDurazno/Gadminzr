export class InnerError {

    public static fromRaw(raw: any){
        return new InnerError(
            raw.Message || raw.message,
            raw.Type || raw.type
        );
    }

    constructor(public Message: string, public Type:string){};
}

export class ResponseError
{
    public static fromRaw(raw:any){
        var errors = raw.Errors || raw.errors || [];
        return new ResponseError(
            raw.ErrorCode || raw.errorCode,
            errors.map(InnerError.fromRaw)
        );
    }

    constructor(public code: number, public errors: InnerError[]){};
}