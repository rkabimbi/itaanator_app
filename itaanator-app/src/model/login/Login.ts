export interface ILogin{
    username: string;
    password: string;
}


export class Login implements ILogin{
    username;
    password;

    constructor(username:string, password:string){
        this.username=username;
        this.password=password
    }

}