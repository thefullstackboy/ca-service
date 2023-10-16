module.exports = {
    URL:{
        HOME:"/",
        SIGN_IN:"/sign-in",
        SIGN_UP:"/sign-up",
        FORGOT_PASSWORD:"/forgot-password",
        DETAILS_PAGE:"/details-page"
    },
    APIURL: {
        SIGN_IN: 'http://localhost:8000'.concat("/api/token/"),
        SIGN_UP: 'http://localhost:8000'.concat("/api/accounts/signup"),
        SERVICE_GET: 'http://localhost:8000'.concat("/api/services/<id>"),
        SERVICE_LIST: 'http://localhost:8000'.concat("/api/services/"),
        SERVICE_CREATE: 'http://localhost:8000'.concat("/api/services/create"),
    }
}