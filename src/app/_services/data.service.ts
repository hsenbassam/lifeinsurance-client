import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
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
            .map(response => !response.json().errorCode ? response.json() : null);
    }

    get(key) {
        this.addHeaders();
        return this.http.get(this.url + '/' + key, this.options)
            .map(response => !response.json().errorCode ? response.json() : null);
    }

    post(resource) {
        this.addHeaders();
        return this.http.post(this.url, resource, this.options)
            .map(response => !response.json().errorCode ? response.json() : null);
    }

    update(resource) {
        this.addHeaders();
        return this.http.put(this.url + '/' + resource.id, resource, this.options)
            .map(response => !response.json().errorCode ? response.json() : null);
    }

    delete(id) {
        this.addHeaders();
        return this.http.delete(this.url + '/' + id, this.options)
            .map(response => response.arrayBuffer().byteLength === 0);
    }

}
