import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { LOCALHOST } from '../_shared/constants';


@Injectable()
export class ShoppingCartService {

    private headers = new Headers;
    private options = new RequestOptions;
    private url = LOCALHOST + 'api/shopping-cart';

    constructor(private http: Http) {
    }


    private addHeaders() {

        this.headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        });
        this.options = new RequestOptions({ headers: this.headers });
    }

    getAll(userId) {
        this.addHeaders();
        return this.http.get(this.url + '?userId=' + userId, this.options)
            .map(response => !response.json().errorCode ? response.json() : null);
    }

    post(cartProduct, userId) {
        this.addHeaders();
        return this.http.post(this.url + '?userId=' + userId, cartProduct, this.options)
            .map(response => !response.json().errorCode ? response.json() : null);
    }

    delete(id) {
        this.addHeaders();
        return this.http.delete(this.url + '/' + id, this.options)
            .map(response => response.arrayBuffer().byteLength === 0);
    }

}
