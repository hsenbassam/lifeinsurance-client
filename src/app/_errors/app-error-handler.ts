import { ErrorHandler } from "@angular/core";
import { Response } from "@angular/http/src/static_response";

export class AppErrorHandler implements ErrorHandler {

    handleError(error) {

        console.log('Unexpected error'); 
        console.log(error)
        
    }
}