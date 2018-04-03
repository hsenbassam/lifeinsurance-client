import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { DataService } from "./data.service";


@Injectable()
export class UserService extends DataService {
    constructor(http: Http) {
        super('http://localhost:8080/lifeinsurance/api/users', http);
    }

    changePassword(userId, oldPass, newPass) {
        this.addHeaders();
        let passObject = { 'oldpass': oldPass, 'newpass': newPass };
        return this.http.put(this.url + "/changePassword/" + userId, passObject , this.options)
            .map(response => response.json())
            .catch(this.handleError)
    }
}