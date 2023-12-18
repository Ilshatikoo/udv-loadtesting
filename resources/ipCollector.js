import http from "k6/http";
import { BaseHelper } from "../helpers/baseHelper.js";

let baseHelper = new BaseHelper();

export class IpmService {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }


    doCreateIp(body) {
        let response = http.post(`${this.baseUrl}/create_ip`, body);
        baseHelper.checkResponseStatusIs200(response);
        baseHelper.checkResponseTimeIsLess500ms(response);
    }

    doGetIp(ipUID, body) {
        let response = http.post(`${this.baseUrl}/get_ips/${ipUID}`, body);
        baseHelper.checkResponseStatusIs200(response);
        baseHelper.checkResponseTimeIsLess500ms(response);
    }

    doGetIps(limit, body) {
        let response = http.post(`${this.baseUrl}/get_ips?limit=${limit}`, body);
        baseHelper.checkResponseStatusIs200(response);
        baseHelper.checkResponseTimeIsLess500ms(response);
    }
}