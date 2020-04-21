import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let ApiService = class ApiService {
    constructor(http) {
        this.http = http;
        this.API_URL = '/api';
    }
    checkPayout(pn) {
        const body = { phoneNumber: pn.phoneNumber };
        return this.http.post(`${this.API_URL}/parkoff`, body);
    }
};
ApiService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], ApiService);
export { ApiService };
//# sourceMappingURL=api.service.js.map