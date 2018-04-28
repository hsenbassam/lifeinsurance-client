import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from './data.service';

import { LOCALHOST } from '../_shared/constants';


@Injectable()
export class UserService extends DataService {
    constructor(http: Http) {
        super(LOCALHOST + 'api/users', http);
    }

    changePassword(userId, oldPass, newPass) {
        this.addHeaders();
        const passObject = { 'oldpass': oldPass, 'newpass': newPass };
        return this.http.put(this.url + '/changePassword/' + userId, passObject, this.options)
            .map(response => response.json());
    }
}
