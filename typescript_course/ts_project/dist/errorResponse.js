"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class ErrorResponse {
    constructor() {
        this.code = 404;
    }
}
class SuccesssResponse {
    constructor() {
        this.code = 200;
        this.response = '';
    }
}
function get(req) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield fetch("https://...");
            let res = {
                data: null,
                code: 500,
            };
            if (data) {
                if (req instanceof SuccesssResponse) {
                    res = {
                        data,
                        code: req.code,
                    };
                }
                else {
                    if (req instanceof ErrorResponse) {
                        res = {
                            data,
                            code: req.code,
                        };
                    }
                }
            }
            return res;
        }
        catch (error) {
            return {
                data: null,
                code: 500,
            };
        }
    });
}
