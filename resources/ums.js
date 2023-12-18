import http from "k6/http";
import { BaseHelper } from "../helpers/baseHelper.js";

let baseHelper = new BaseHelper();
// body в json.stringify?
export class UmsService {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    doLogin(body) {
        let response = http.post(`${this.baseUrl}`, body);
        baseHelper.checkResponseStatusIs200(response);
        baseHelper.checkResponseTimeIsLess500ms(response);
    }

    doCreateUser(body) {
        let response = http.post(`${this.baseUrl}/create_user`, body);
        baseHelper.checkResponseStatusIs200(response);
        baseHelper.checkResponseTimeIsLess500ms(response);
    }

    doGetUsers(limit, body) {
        let response = http.post(`${this.baseUrl}/get_users?limit=${limit}`, body);
        baseHelper.checkResponseStatusIs200(response);
        baseHelper.checkResponseTimeIsLess500ms(response);
    }

    doGetUser(userUID, body) {
        let response = http.post(`${this.baseUrl}/get_users/${userUID}`, params, body);
        baseHelper.checkResponseStatusIs200(response);
        baseHelper.checkResponseTimeIsLess500ms(response);
    }

    doUserUpdate(userUID, body) {
        let response = http.post(`${this.baseUrl}/user_update/${userUID}`, params, body);
        baseHelper.checkResponseStatusIs200(response);
        baseHelper.checkResponseTimeIsLess500ms(response);
    }
}