const { BASEURL } = require("./config")

module.exports = {
    URL:{
        HOME:"/",
        SIGN_IN:"/sign-in",
        SIGN_UP:"/sign-up",
        SIGN_OUT: "/sign-out",
        FORGOT_PASSWORD:"/forgot-password",
        DETAILS_PAGE:"/details-page",
        CREATE_SERVICE:"/create-service"
    },
    APIURL: {
        SIGN_IN: BASEURL.concat("/api/token/"),
        SIGN_UP: BASEURL.concat("/api/accounts/signup"),
        SERVICE_GET: BASEURL.concat("/api/services/<id>"),
        SERVICE_LIST: BASEURL.concat("/api/services/"),
        SERVICE_CREATE: BASEURL.concat("/api/services/create"),
    }
}