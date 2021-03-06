import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from './data.service';
import { LOCALHOST } from '../_shared/constants';


@Injectable()
export class TermLifeSimulatorService extends DataService {
    constructor(http: Http) {
        super(LOCALHOST +  'simulatorProcess/term-life', http);
    }
}
