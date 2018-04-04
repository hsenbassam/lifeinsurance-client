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
export class PaypalPaymentService  {

    private headers = new Headers({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    private options = new RequestOptions({ headers: this.headers });
    private url = 'http://localhost:8080/lifeinsurance/api/paypal/';

    constructor(private http: Http) {
    }


    makePayment(sum) {
        return this.http.post(this.url + "make/payment?sum=" + sum, null, this.options)
            .map(response => response.json())
            .catch(this.handleError);
    }

    completePayment(paymentId, payerId) {
        return this.http.post(this.url + "complete/payment?paymentId=" + paymentId + "&payerId=" + payerId, null, this.options)
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