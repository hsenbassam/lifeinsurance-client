import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions} from "@angular/http";
import { DataService } from "./data.service";
import { Observable } from "rxjs/Observable";
import { AppError } from "../common/app-error";
import { NotFoundError } from "../common/not-found-error";
import { BadInput } from "../common/bad-input";
import { JwtHelperService } from '@auth0/angular-jwt';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthService {

    private headers = new Headers({ 'Content-Type': 'application/json'});
    private options = new RequestOptions({ headers: this.headers });
    private url = 'http://localhost:8080/lifeinsurance/';

    constructor(private http: Http, private jwtHelper: JwtHelperService) {}

    login(resource) {
        return this.http.post(this.url + "loginProcess", resource, this.options)
            .map(response => {
                let token = response.headers.get('Token');      
                if(response && token) {
                let payload = response.json();
                console.log(payload);
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(payload));
                return true;
              }
              return false;
            })
            .catch(this.handleError);
        }

    logout() {
        localStorage.clear();
    }

    isAuthenticated(): boolean {

        const token = localStorage.getItem('token');

        if(!token) return false;
        let isExpired = this.jwtHelper.isTokenExpired(token);
        return !isExpired;
    }

    
    get currentUser() {
        let token = localStorage.getItem('token');
        if(!token ) return null;
        return this.jwtHelper.decodeToken(token);
    }

    get userInfo() {
        return JSON.parse(localStorage.getItem('user'));
    }

 

    private handleError(error: Response) {

        if(error.status === 404)
            return Observable.throw(new NotFoundError(error))
        if(error.status === 400)
            return Observable.throw(new BadInput(error))
        return Observable.throw(new AppError(error));
            
    }

  

}
