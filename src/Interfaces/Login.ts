export interface login{
    username:string,
    password:string
}

export interface Register{
    user:string,
    username:string,
    password:string,
    idPersonagem:Number
}

export interface registerLogin{
    user:string,
    username:string,
    password:string,
    passwordConfirm:string,
    idPersonagem:Number
}