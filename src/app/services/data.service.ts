import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable"
import { AppError } from "../common/app-error";
import { NotFoundError } from "../common/not-found-error";
import { BadInput } from "../common/bad-input";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

export class DataService {

    private headers: Headers;
    private options: RequestOptions;

    constructor(private url: string, private http: Http) {

        this.headers = new Headers({
            'Content-Type': 'application/json'
        });

        this.options = new RequestOptions({ headers: this.headers });
    }

    private checkAuthorizationHeader() {
        if (!this.headers.get('Authorization')) {
            this.headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
            this.options = new RequestOptions({ headers: this.headers });
        }
    }

    getAll() {
        this.checkAuthorizationHeader();
        return this.http.get(this.url, this.options)
            .map(response => response.json())
            .catch(this.handleError)
    }

    get(key) {
        this.checkAuthorizationHeader();
        return this.http.get(this.url + '/' + key, this.options)
            .map(response => response.json())
            .catch(this.handleError)
    }

    post(resource) {
        this.checkAuthorizationHeader();
        return this.http.post(this.url, resource, this.options)
            .map(response => response.json())
            .catch(this.handleError);
    }

    update(resource) {
        this.checkAuthorizationHeader();
        return this.http.put(this.url + '/' + resource.id, resource, this.options)
            .map(response => response.json())
            .catch(this.handleError);
    }

    delete(id) {
        this.checkAuthorizationHeader();
        return this.http.delete(this.url + '/' + id, this.options)
            .map(response => (response.status === 200))
            .catch(this.handleError);
    }


    private handleError(error: Response) {

        if (error.status === 404)
            return Observable.throw(new NotFoundError(error))
        if (error.status === 400)
            return Observable.throw(new BadInput(error))
        return Observable.throw(new AppError(error));

    }
}