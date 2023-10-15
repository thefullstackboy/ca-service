import { BASEURL } from "./configs/settings/config";

module.exports = {
    URL:{
        HOME:"/",
        SIGN_IN:"/sign-in",
        SIGN_UP:"/sign-up",
        FORGOT_PASSWORD:"/forgot-password",
        DETAILS_PAGE:"/details-page"
    },
    APIURL: {
        SIGN_IN: BASEURL + "/api/token/",
        SIGN_UP: BASEURL + "/api/accounts/signup",
        SERVICE_GET: BASEURL + "/api/services/<id>",
        SERVICE_LIST: BASEURL + "/api/services/",
        SERVICE_CREATE: BASEURL + "/api/services/create",
    }
}