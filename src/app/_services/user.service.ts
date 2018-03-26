import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { DataService } from "./data.service";


@Injectable()
export class UserService extends DataService {
    constructor(http: Http) {
        super('http://localhost:8080/lifeinsurance/api/users', http);
    }
}