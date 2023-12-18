import http from "k6/http";
import { BaseHelper } from "../helpers/baseHelper.js";

let baseHelper = new BaseHelper();

export class VmmService {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    doCreateVm(body) {
        let response = http.post(`${this.baseUrl}/create_vm`, body);
        baseHelper.checkResponseStatusIs200(response);
        baseHelper.checkResponseTimeIsLess500ms(response);
    }

    doGetVms(body) {
        let response = http.post(`${this.baseUrl}/get_vms?limit=${limit}`, body);
        baseHelper.checkResponseStatusIs200(response);
        baseHelper.checkResponseTimeIsLess500ms(response);
    }

    doGetVm(vmUID, body) {
        let response = http.post(`${this.baseUrl}/get_vm/${vmUID}`, body);
        baseHelper.checkResponseStatusIs200(response);
        baseHelper.checkResponseTimeIsLess500ms(response);
    }
}