import { Injectable } from "@angular/core";
import { Http, RequestOptions, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable"
import { AppError } from "../_errors/app-error";
import { NotFoundError } from "../_errors/not-found-error";
import { BadInput } from "../_errors/bad-input";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';


@Injectable()
export class OrderService {

    private headers = new Headers;
    private options = new RequestOptions;
    private url = 'http://localhost:8080/lifeinsurance/api/orders';

    constructor(private http: Http) {
    }

    private addHeaders() {

        this.headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        });
        this.options = new RequestOptions({ headers: this.headers });
    }

    add(userId) {
        this.addHeaders();
        return this.http.post(this.url + "?userId=" + userId, null, this.options)
            .map(response => response.json())
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