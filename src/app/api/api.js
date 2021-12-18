const BaseApi = require("./baseApi");
const Link = require("./endpoints/link");


class Api extends BaseApi {
    link = new Link();

}

module.exports = Api;