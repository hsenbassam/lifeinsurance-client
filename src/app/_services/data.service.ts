import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable"
import { AppError } from "../_errors/app-error";
import { NotFoundError } from "../_errors/not-found-error";
import { BadInput } from "../_errors/bad-input";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

export class DataService {

    protected headers: Headers;
    protected options: RequestOptions;

    constructor(protected url: string, protected http: Http) {
    }

    protected addHeaders() {

        this.headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        });
        this.options = new RequestOptions({ headers: this.headers });
    }

    getAll() {
        this.addHeaders();
        return this.http.get(this.url, this.options)
            .map(response => response.json())
            .catch(this.handleError)
    }

    get(key) {
        this.addHeaders();
        return this.http.get(this.url + '/' + key, this.options)
            .map(response => response.json())
            .catch(this.handleError)
    }

    post(resource) {
        this.addHeaders();
        return this.http.post(this.url, resource, this.options)
            .map(response => response.json())
            .catch(this.handleError);
    }

    update(resource) {
        this.addHeaders();
        return this.http.put(this.url + '/' + resource.id, resource, this.options)
            .map(response => response.json())
            .catch(this.handleError);
    }

    delete(id) {
        this.addHeaders();
        return this.http.delete(this.url + '/' + id, this.options)
            .map(response => (response.status === 200))
            .catch(this.handleError);
    }


    protected handleError(error: Response) {

        if (error.status === 404)
            return Observable.throw(new NotFoundError(error))
        if (error.status === 400)
            return Observable.throw(new BadInput(error))
        return Observable.throw(new AppError(error));

    }
}