import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { DataService } from './data.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private options = new RequestOptions({ headers: this.headers });
    private url = 'http://18.216.136.136:8080/lifeinsurance/';

    constructor(private http: Http, private jwtHelper: JwtHelperService) { }

    login(resource) {
        return this.http.post(this.url + 'loginProcess', resource, this.options)
            .map(response => {
                const payload = response.json();
                const token = response.headers.get('Token');
                if (!payload.errorCode && token) {
                    localStorage.setItem('token', token);
                    localStorage.setItem('user', JSON.stringify(payload));
                    return true;
                }
                return false;
            });
    }

    logout() {
        localStorage.clear();
    }

    isAuthenticated(): boolean {

        const token = localStorage.getItem('token');
        if (!token) return false;
        const isExpired = this.jwtHelper.isTokenExpired(token);
        return !isExpired;
    }


    get currentUser() {
        const token = localStorage.getItem('token');
        if (!token) {
            return null;
        }
        return this.jwtHelper.decodeToken(token);
    }

    get userInfo() {
        return JSON.parse(localStorage.getItem('user'));
    }

}
