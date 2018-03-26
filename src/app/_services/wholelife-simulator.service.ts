import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { DataService } from "./data.service";


@Injectable()
export class WholeLifeSimulatorService extends DataService {
    constructor(http: Http) {
        super('http://localhost:8080/lifeinsurance/simulatorProcess/whole-life', http);
    }
}