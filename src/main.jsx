module.exports = {
    URL:{
        HOME:"/",
        SIGN_IN:"/sign-in",
        SIGN_UP:"/sign-up",
        FORGOT_PASSWORD:"/forgot-password",
        DETAILS_PAGE:"/details-page"
    },
    APIURL: {
        SIGN_IN: `process.env.BASEURL${"/api/token/"}`,
        SIGN_UP: `process.env.BASEURL${"/api/accounts/signup"}`,
        SERVICE_GET: `process.env.BASEURL${"/api/services/<id>"}`,
        SERVICE_LIST: `process.env.BASEURL.${"/api/services/"}`,
        SERVICE_CREATE: `process.env.BASEURL.${"/api/services/create"}`,
    }
}